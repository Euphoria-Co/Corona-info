import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Block } from "../components";
import { theme } from "../constants";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{justifyContent: "center" }}>

        <Image source={require('../assets/images/11.png')} style={{width: 400, height: 620}} />
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: -180}}></Block>
        <Text h2 light center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lorem commodo felis aliquet feugiat. Nulla vel egestas ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lorem commodo felis aliquet feugiat. Nulla vel egestas ante. Proin volutpat velit ac pulvinar lobortis.
        </Text>
      </View>
    );
  }
}
