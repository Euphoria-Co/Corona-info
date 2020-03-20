import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import { Button, Block, Text } from "../components";
import { theme } from "../constants";

export default class HelloWorldApp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{justifyContent: "center" }}>

        <Image source={require('../assets/images/4.png')} style={{width: 400, height: 620}} />
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: -250}}></Block>
        <Text h2 light center>Nullam consecteturaaaaaaaa Nulla vel egestas ante.
        Nullam consectetur lorem commodo felis aliquet feugiattttttttttttttttttttttttttttt. Czy wykazujesz przynajmniej jeden z tych objawów?
        </Text>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
        <Block middle padding={[theme.sizes.base / 10, 5]}>
        <Button
              gradient
              onPress={() => navigation.navigate('Kraj')}
            >
              <Text h4 center white>
                Tak
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('Obserwuj')}
            >
              <Text h4 center white>
                Nie
              </Text>
            </Button>
            </Block>
        </ScrollView>
      </View>
    );
  }
}
