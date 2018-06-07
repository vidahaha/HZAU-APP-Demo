import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {Scene, Router, Stack} from 'react-native-router-flux';

import Index from './src/container/Index'
import news_123456789 from './src/container/news/news_123456789'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="index" component={Index}  hideNavBar={true}/>
          <Scene key="news_123456789" component={news_123456789}  title="news" />          
        </Stack>
      </Router>
    );
  }
}

