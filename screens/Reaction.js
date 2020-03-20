import React, { Component } from 'react';
import { View,Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet, Button } from 'react-native';
import { Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class HelloWorldApp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
        title="Go to the new screen!"
        onPress={() => navigation.navigate('Newscreen')}
        
      />
      </View>
    );
  }
}