import React, { Component } from 'react';
import { View, LogBox } from 'react-native';
import RootNavigation from './Screens/RecordPage';

LogBox.ignoreAllLogs()

class Root extends Component {

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </>
    );
  }
}
export default Root;