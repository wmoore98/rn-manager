import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';
// import AppNavigator from './AppNavigator';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDUk3PJpfwGMiRIZxz8D2fu4WDNr6CYeH8",
            authDomain: "rn-manager-e4480.firebaseapp.com",
            databaseURL: "https://rn-manager-e4480.firebaseio.com",
            projectId: "rn-manager-e4480",
            storageBucket: "rn-manager-e4480.appspot.com",
            messagingSenderId: "124100839509"
        };
        firebase.initializeApp(config);
        console.ignoredYellowBox = ['Setting a timer'];

    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
