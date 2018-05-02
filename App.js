import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Index from './src/container/Index'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollableTabView>      
        <Index tabLabel='新闻活动' style={styles.container}></Index>
        <Text tabLabel='校园风光' style={styles.container}>favorite</Text>
        <Text tabLabel='院系介绍' style={styles.container}>project</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlign: 'center',
    color: '#333333',
    paddingTop: 20,
    marginBottom: 5,
    fontSize: 20,
  }
});
