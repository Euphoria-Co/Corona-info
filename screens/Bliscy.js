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
          <Text h3 light>Jak dbać o bliskich?</Text>
          </Block>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Block middle padding={[theme.sizes.base / 10, 5]}>
            <Button
              gradient
              onPress={() => navigation.navigate('Kwarantanna')}
            >
              <Text h4 center white>
               Dbanie o bliskich w przypadku, gdy ktoś jest zarażony
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('Podejrzenie')}
            >
              <Text h4 center white>
                Dbanie o bliskich w przypadku, gdy ktoś podejrzewa chorobę
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('Zachowaj')}
            >
              <Text h4 center white>
              Dbanie o bliskich w przypadku, gdy nikt nie jest zarażony lub nikt nie wykazuje objawów choroby
              </Text>
            </Button>
          </Block>
          </ScrollView>
      </View>
    );
  }
}
