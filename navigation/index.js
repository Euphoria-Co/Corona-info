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
    Settings
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