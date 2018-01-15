import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Router, Scene, Reducer, Actions,ActionConst } from 'react-native-mobx';
import MainPage from './App';
import AddStor from'./AddStor';
export default class MainP extends Component {
  
  render() {
    return (
        <Router >
            <Scene key="mainapp" component={MainPage} title="Main" type={ActionConst.REPLACE} initial={true} />
            <Scene key="AddStor" component={AddStor} title="Add" type={ActionConst.REPLACE} initial={true} />
        </Router>
    );
  }  
}