import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
    apiKey: 'AIzaSyDZKwXXg581aUhyu3B7xftZJfHA_caxxow',
    authDomain: 'manager-58d1b.firebaseapp.com',
    databaseURL: 'https://manager-58d1b.firebaseio.com',
    projectId: 'manager-58d1b',
    storageBucket: 'manager-58d1b.appspot.com',
    messagingSenderId: '662234912137',
    appId: '1:662234912137:web:dd9705112c49ee32'
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
