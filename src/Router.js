import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
// import Actions from './actions';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        titleStyle={styles.navigationBarTitleStyle}
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        titleStyle={styles.navigationBarTitleStyle}
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                        titleStyle={styles.navigationBarTitleStyle}
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                        titleStyle={styles.navigationBarTitleStyle}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

// const styles = StyleSheet.create({
const styles = {
    navigationBarTitleStyle: {
      // centering for Android
     flex: 1,
     textAlign: 'center'
 }
};


export default RouterComponent;
