import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import Communications from 'react-native-communications';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSavePress() {
        const { name, phone, shift } = this.props;
        Keyboard.dismiss();
        // console.log({ name, phone, shift: shift || 'Monday' });
        this.props.employeeSave({ name, phone, shift: shift || 'Monday', uid: this.props.employee.uid });
    }

    onTextPress() {
        const { name, phone, shift } = this.props;
        const message = `Hi ${name}. Your upcoming shift is on ${shift}. Be there!!!`;
        Communications.text(phone, message);
    }

    onAccept() {
        this.setState({ showModal: false });
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                
                <CardSection>
                    <Button onPress={this.onSavePress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee (Delete)
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete {this.props.name}?
                </Confirm>
            </Card>

        );
    }
}

/*

*/
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
