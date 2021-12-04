import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Store";
import Navigation from "./src/Navigation/index";
import NavigationService from "./src/Service/navigationService";
import Lock from "./src/Screens/lockScreen";
import ResetPIN from "./src/Screens/resetPIN";
import Manage from "./src/Screens/manage";
import Sett from "./src/Screens/Sett";
import SeeDetail from "./src/Screens/SeeDetail";
import Con from "./src/Screens/contact";
/* import Sroll from './src/Screens/sroll' */
import Not from "./src/Screens/not";
import Change from "./src/Screens/ChangePassword";
import Reset from "./src/Screens/Reset";
import Tran from "./src/Screens/TransactionDetail";
import AddNewCashier from "./src/Screens/addNewCashier";
import AddNewOutlet from "./src/Screens/AddNewOutlet";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation
            ref={(navigatorRef) =>
              NavigationService.setTopLevelNavigator(navigatorRef)
            }
          />
        </View>
      </Provider>
    );
  }
}
