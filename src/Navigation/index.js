import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { NAV_TYPES } from "./navTypes";
import screenLogin from "./../Container/ScreenLoginContainer";
import screen from "./../Container/productEditContainer";
import screenHome from "../Container/ScreenHomeContainer";
import screenHomeDetail from "../Container/ScreenHomeDetailContainer";
import screenEditTemplete from "../Container/ScreenEditTempleteContainer";
import Container_Register from "../Container/ScreenRegisterContainer";
import Container_VerifyLogin from "../Container/ScreenVerifyLoginContainer";
import screenSave from "../Container/ScreenSaveContainer";
import screenSetting from "../Container/ScreenSettingContainer";
import screenBuynow from "../Container/ScreenBuynowContainer";
import Container_Startup from "../Container/ScreenStartUpContainer";
import OrderContainer from "../Container/OrderContainer";
import EditContainer from "../Container/EditContainer";
import Container_ViewEdit from "../Container/ViewEditContainer";
import ViewOrderContainer from "../Container/ViewOrderContainer";

import IconF from "react-native-vector-icons/Feather";
import IconE from "react-native-vector-icons/Entypo";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconIonicons from "react-native-vector-icons/Ionicons";
import NavigationService from "./../Service/navigationService";

const EditNavigator = createStackNavigator(
  {
    [NAV_TYPES.EDIT]: {
      screen: EditContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.VIEW_EDIT]: {
      screen: Container_ViewEdit,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.EDITTEMPLETE]: {
      screen: screenEditTemplete,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.SAVE]: {
      screen: screenSave,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.EDIT,
  }
);

const OrderNavigator = createStackNavigator(
  {
    [NAV_TYPES.ORDER]: {
      screen: OrderContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.VIEW_ORDER]: {
      screen: ViewOrderContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.ORDER,
  }
);

const HomeNavigator = createStackNavigator(
  {
    [NAV_TYPES.HOME]: {
      screen: screenHome,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.HOME_BUY]: {
      screen: screenHomeDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.HOME_BUY_NOW]: {
      screen: screenBuynow,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.HOME,
  }
);

//Tab Navigation
const TabNavigator = createBottomTabNavigator(
  {
    //////////home///////////////////
    [NAV_TYPES.HOME_TAB]: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: "center" }}>
            <IconF
              name="home"
              style={{
                fontSize: 20,
                marginBottom: 3,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            >
              Home
            </Text>
          </View>
        ),
      },
    },

    ////////////order///////////////
    [NAV_TYPES.ORDER_TAB]: {
      screen: OrderNavigator,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: "center" }}>
            <IconE
              name="box"
              style={{
                fontSize: 20,
                marginBottom: 3,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            >
              Order
            </Text>
          </View>
        ),
      },
    },
    //////////////Edit////////////////
    [NAV_TYPES.STORE_TAB]: {
      screen: EditNavigator,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: "center" }}>
            <IconF
              name="edit"
              style={{
                fontSize: 20,
                marginBottom: 3,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            >
              Edit
            </Text>
          </View>
        ),
      },
    },
    ///////////////////Setting////////////////////////
    [NAV_TYPES.CARD_TAB]: {
      screen: screenSetting,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <View style={{ alignItems: "center" }}>
            <IconF
              name="settings"
              style={{
                fontSize: 20,
                marginBottom: 3,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: focused ? "#60d1f1" : "#ECECEC",
              }}
            >
              Setting
            </Text>
          </View>
        ),
      },
    },
    /* acc */
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 20,
        marginBottom: 3,
      },
      style: {
        backgroundColor: "#114898",
        height: Platform.OS === "ios" ? 60 : 60,
        paddingBottom: Platform.OS === "ios" ? 10 : 10,
      },
      activeColor: "#315fff",
      activeTabStyle: { backgroundColor: "#315fff" },
    },
  }
);

const CoreNavigation = createStackNavigator(
  {
    [NAV_TYPES.TAB_BAR]: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.EDITTEMPLETE]: {
      screen: screenEditTemplete,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.TAB_BAR,
    // initialRouteName: NAV_TYPES.EDITTEMPLETE,
  }
);

const IntroNavigator = createStackNavigator(
  {
    [NAV_TYPES.LOGIN]: {
      screen: screenLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.REGISTER]: {
      screen: Container_Register,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.VERIFY_LOGIN]: {
      screen: Container_VerifyLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.LOGIN,
  }
);

const MainNavigation = createStackNavigator(
  {
    [NAV_TYPES.START_UP]: {
      screen: Container_Startup,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.INTRO]: {
      screen: IntroNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    [NAV_TYPES.CORE]: {
      screen: CoreNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: NAV_TYPES.START_UP,
  }
);
export default createAppContainer(MainNavigation);
