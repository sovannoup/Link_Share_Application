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
import { color } from "react-native-reanimated";
import CustomText from "../component/customtext";
import { NAV_TYPES } from "./../Navigation/navTypes";
import Button from "../component/Button";
import NavigationService from "./../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
export default class ScreenLogin extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      Lg: [],
    };
  }
  componentDidMount() {
    // this.props.g_language();

    console.log("hhh", this.props);
    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
  }
  render() {
    return (
      <SafeAreaView style={(styles.body, { flex: 1 })}>
        <LinearGradient
          colors={["#2477B2", "#1758A1", "#104797"]}
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <CustomText Leaguage={this.state.Lg} />
          <View style={styles.headerLogo}>
            <Image
              style={styles.logo}
              source={require("./../Assets/Images/Logo-2.png")}
            />
          </View>
          <View style={styles.blockTop}>
            <View style={styles.box}>
              <Image
                style={styles.icon}
                source={require("./../Assets/Icon/elements/a4.png")}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                keyboardType="numeric"
                placeholderTextColor="#95a2b0"
              />
            </View>

            {/*  {  <TouchableOpacity
              style={styles.button}
              onPress={() => NavigationService.navigate(NAV_TYPES.VERIFY_LOGIN)}>
              <Text style={styles.buttonText}>Get verify code</Text>
            </TouchableOpacity> } */}
            <View
              style={{ marginTop: "5%", width: "100%", alignItems: "center" }}
            >
              <Button
                title="Get verify code"
                press={() => NavigationService.navigate(NAV_TYPES.VERIFY_LOGIN)}
              />
            </View>
            <TouchableOpacity
              style={styles.TextLogin}
              onPress={() => NavigationService.navigate(NAV_TYPES.REGISTER)}
            >
              <Text style={styles.Text}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  TextLogin: {
    marginRight: "13%",
    marginTop: "10%",
  },
  body: {
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    // backgroundColor: '#195ca3',
  },
  blockTop: {
    flex: 1,
    height: "100%",
    marginTop: "10%",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: "5%",
    // resizeMode: 'contain'
  },
  headerLogo: {
    marginTop: "20%",
    position: "relative",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    marginTop: 3,
    color: "#fff",
    fontSize: 18,
    width: "90%",
  },
  box: {
    height: 45,
    // backgroundColor:'red',
    width: "70%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    width: 23,
    height: 23,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    height: 40,
    backgroundColor: "#fff",
    width: "70%",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#4a7bb5",
    fontSize: 18,
  },
  Text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
    marginLeft: "70%",
    marginTop: 30,
  },
});
