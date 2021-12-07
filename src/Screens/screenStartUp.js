import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { NAV_TYPES } from "./../Navigation/navTypes";
import NavigationService from "./../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
export default class StartUp extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  componentDidMount() {
    this.props.startupWorker();
  }
  render() {
    return (
      <SafeAreaView style={(styles.body, { flex: 1 })}>
        <LinearGradient
          colors={["#2477B2", "#1758A1", "#104797"]}
          style={styles.header}
        >
          <Image
            style={styles.logo}
            source={require("./../Assets/Images/Logo-2.png")}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: "40%",
    height: "25%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
