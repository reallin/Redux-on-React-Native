/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//  'use strict';
//
// var React = require('react-native');
//  import BaseApp from './js/BaseApp';
//  import {
//    AppRegistry,
//  } from 'react-native';
//
//  var Todo = React.createClass({
//    render: function() {
//      return (
//        <BaseApp />
//      );
//    }
//  });
//
//  AppRegistry.registerComponent('TodoList', () => Todo);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BaseApp from './js/BaseApp';
class Redux extends Component {
  render() {
    return (
      <BaseApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Redux', () => Redux);
