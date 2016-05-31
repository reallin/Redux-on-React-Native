import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import {Provider} from  'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as actions from './actions';
import List from './List';


export default class App extends Component{
  constructor(props){
    	super(props);
    this.initialRoute={
      name: 'List',
			component: List,
    }
  }
  configureScene() {
		return Navigator.SceneConfigs.VerticalDownSwipeJump;
	}

  renderScene(route, navigator){
    let Com = route.component;
    const {state,dispatch} = this.props;
    const action = bindActionCreators(actions,dispatch);
    return (
      <Com
        state = {state}
        actions = {action}
        {...route.params}
        navigator={navigator}
      />
    );
  }
  render(){
    var _this = this;
    return(
    <Navigator
    initialRoute={_this.initialRoute}
    renderScene={_this.renderScene.bind(_this)}
    configureScene={_this.configureScene.bind(_this)}/>

);
}
}


function selector(state) {
return {
state: state
}
}
export default connect(selector)(App);
