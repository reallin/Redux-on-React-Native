import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App'
import {Provider} from  'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';


const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);

export default class BaseApp extends React.Component {

    render() {
      return (
        <Provider store={store}>
      <App /> 
        </Provider>
      );

	}
}
