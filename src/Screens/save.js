import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import { WebView } from "react-native-webview";
import IconF from "react-native-vector-icons/Feather";
const win = Dimensions.get("window");
export default class Save extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.coverHomeIcon}>
          <TouchableOpacity
            style={styles.homeIcon}
            onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
          >
            <View style={styles.Icon}>
              <IconF name="home" style={{ fontSize: 20, color: "white" }} />
            </View>
          </TouchableOpacity>
        </View>
        {/* <ScrollView style={styles.scrollView}> */}
        {/* <Image style={{width:'100%', resizeMode: 'contain', marginVertical: -1800}} source={require('./../Assets/Images/ViewTheWholdTemplate.jpg')} /> */}
        <WebView
          style={{ width: win.width, height: win.height, marginBottom: 50 }}
          source={{ uri: "https://linkshare.amatak.net" }}
        />

        {/* </ScrollView> */}
        <View>
          <TouchableOpacity
            style={styles.copy}
            onPress={() => alert("Successful copied")}
          >
            <Text style={{ fontSize: 25, color: "white" }}>Copy Link</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  coverHomeIcon: {
    backgroundColor: "white",

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Icon: {
    backgroundColor: "#114898",
    padding: 5,
    borderRadius: 30,
    width: 35,
    height: 35,
    alignItems: "center",
  },
  homeIcon: {
    flex: 1,
  },
  scrollView: {
    // height: '100%'
  },

  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#0000fe",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
  },
  copy: {
    position: "absolute",
    backgroundColor: "#114898",
    bottom: 0,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
