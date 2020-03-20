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
          <Text h3 light>Czy w ciągu ostatnich 14 dni przebywałeś w kraju lub na terenie w którym występuje choroba lub miałeś
          kontakt z osobą zarażoną/ lub objawami?</Text>
          </Block>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Block middle padding={[theme.sizes.base / 10, 5]}>
            <Button
              gradient
              onPress={() => navigation.navigate('Telefon')}
            >
              <Text h4 center white>
                Tak
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('Podstawowe')}
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
