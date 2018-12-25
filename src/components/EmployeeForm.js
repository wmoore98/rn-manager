import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { CardSection, Input } from './common';


class EmployeeForm extends Component {

/*
    pickerItems() {
        const items = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        let itemJSX = '';
        
        items.forEach(item => itemJSX += `<Picker.Item label="${item}" value="${item}" /> `);
        console.log(itemJSX);
        return itemJSX;
    }
*/

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ flex: 1, alignItems: 'center', minHeight: 40 }}>
                    <Text style={styles.pickerLabelStyle}>
                        Shift
                    </Text>
                    <View style={{ flex: 2 }}>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                </CardSection>
                <CardSection>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>WORLD</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
