import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Reaction from "../screens/Reaction";
import Newscreen from "../screens/Newscreen";
import Startscreen from "../screens/Startscreen";
import Zarazony from "../screens/Zarazony";
import Ochrona from "../screens/Ochrona";
import Bliscy from "../screens/Bliscy";
import Objawy from "../screens/Objawy";
import Obserwuj from "../screens/Obserwuj";
import Kraj from "../screens/Kraj";
import Podstawowe from "../screens/Podstawowe";
import Telefon from "../screens/Telefon";
import Objawami from "../screens/Objawami";
import Kwarantanna from "../screens/Kwarantanna";
import Podejrzenie from "../screens/Podejrzenie";
import Zachowaj from "../screens/Zachowaj";
import Maska from "../screens/Maska";
import Środki from "../screens/Środki";
import Higiena from "../screens/Higiena";


import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Reaction,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Product,
    Settings,
    Newscreen,
    Startscreen,
    Zarazony,
    Ochrona,
    Bliscy,
    Objawy,
    Obserwuj,
    Kraj,
    Podstawowe,
    Telefon,
    Objawami,
    Kwarantanna,
    Podejrzenie,
    Zachowaj,
    Maska,
    Środki,
    Higiena,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.accent, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android
		paddingBottom: 0
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
