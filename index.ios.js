/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GaoDeContainer from './js/GaoDe';

export default class GaoDe extends Component {
  render() {
    return (
      <GaoDeContainer />
    );
  }
}

AppRegistry.registerComponent('GaoDe', () => GaoDe);
