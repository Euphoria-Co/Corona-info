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
          <Text h3 light>Czy wykazujesz jakiekolwiek objawy choroby?</Text>
          </Block>
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
            <Button
              gradient
              onPress={() => navigation.navigate('Objawami')}
            >
              <Text h4 center white>
               Nie wiem jakie są objawy koronawirusa
              </Text>
            </Button>
          </Block>
          </ScrollView>
      </View>
    );
  }
}
