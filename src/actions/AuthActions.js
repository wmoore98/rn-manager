import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigation))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user, navigation))
                    .catch(error => loginUserFail(dispatch, error));
            });
    }
}

const loginUserSuccess = (dispatch, user, navigation) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
    // navigation.navigate('EmployeeList');

    // Using 'replace' to make Employee List top of stack
    // navigation.replace('EmployeeList');
};

const loginUserFail = (dispatch, error) => {
    console.log('ERROR: ', error);
    dispatch({ type: LOGIN_USER_FAIL });
};
