import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const AppNavigator = createStackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: () => ({
      title: "Please Login",
      headerBackTitle: null,
/*
      headerStyle: {
        backgroundColor: 'yellow'
      },
      headerLeft: (<View></View>), 
      headerRight: (<View></View>),
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'red',
        backgroundColor: 'cyan',
        borderWidth: 1,
        borderColor: 'red'
      }
*/
    })
  },
  EmployeeList: {
    screen: EmployeeList,
    navigationOptions: () => ({
      title: "Employees",
      headerBackTitle: null,
    })
  }},
  {
    initialRouteName: 'LoginForm'
  });

export default AppNavigator;
