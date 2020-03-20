import React, { Component } from "react";
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
      <View /*style={{ flex: 1,alignItems: "center" }}*/>
        <Block flex={false} row center space="between" /*style={styles.header}*/>
          <Text h2 bold>{"Okno szybkiego reagowania"}</Text>
        </Block>
        
        <Block flex={false} row center space="between" middle padding={[theme.sizes.base / 0.8, 0]} /*style={styles.header}*/>
          <Text h3 light>Jestes w oknie szybkiego reagownia, tutaj szybko znajdziesz odpowiedzi na nurtujące cie pytania!</Text>
          </Block>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Block middle padding={[theme.sizes.base / 0.5, 20]}>
            <Button
              gradient
              onPress={() => navigation.navigate('Startscreen')}
            >
              <Text h4 center white>
                Zaczynajmy!
              </Text>
            </Button>
          </Block>
          </ScrollView>
      </View>
    );
  }
}
