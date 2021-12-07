import React, { Component } from "react";
import {
  Keyboard,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { color } from "react-native-reanimated";
import { NAV_TYPES } from "./../Navigation/navTypes";
import CodeInput from "react-native-confirmation-code-input";
import NavigationService from "./../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
import navigationService from "./../Service/navigationService";
import moment from "moment";
export default class VerifyLogin extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      phonenumber: "",
      shopname: "",
      type: "",
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const phone = navigation.getParam("phonenumber", false);
    const shop = navigation.getParam("shopname", false);
    const type = navigation.getParam("type", false);
    this.setState({ phonenumber: phone, type: type, shopname: shop });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { user } = this.props;

    if (nextProps.user.r_login && nextProps.user.r_login != user.r_login) {
      if (nextProps.user.r_login.message === "success") {
        this.props.f_login({
          phonenumber: this.state.phonenumber,
        });
      }
    }
    if (
      nextProps.user.r_register &&
      nextProps.user.r_register != user.r_register
    ) {
      if (nextProps.user.r_register.message === "success") {
        navigationService.navigate(NAV_TYPES.HOME);
      }
    }
  }
  checkCode = (isCorrect) => {
    if (isCorrect) {
      if (this.state.type === "login") {
        this.props.f_login({
          phonenumber: this.state.phonenumber,
        });
      } else {
        this.props.f_register({
          shopname: this.state.shopname,
          phonenumber: this.state.phonenumber,
          date: moment().format("YYYY/MM/DD-HH:mm:ss"),
        });
      }
    }
  };
  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
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
          <View style={styles.headerLogo}>
            <Image
              style={styles.logo}
              source={require("./../Assets/Images/Logo-2.png")}
            />
          </View>
          <View style={styles.blockTop}>
            <Text style={{ color: "#fff", fontSize: 18, marginBottom: "5%" }}>
              SMS Verify Code
            </Text>

            <View style={{ flexDirection: "row" }}>
              <CodeInput
                keyboardType="numeric"
                codeLength={6}
                codeInputStyle={{
                  borderWidth: 0,
                  backgroundColor: "white",
                  borderRadius: 5.59,
                  width: "10.5%",
                  marginLeft: "1%",
                  marginRight: "1%",
                  fontSize: 18,
                }}
                activeColor="black"
                inactiveColor="white"
                autoFocus={false}
                ignoreCase={false}
                compareWithCode="111111"
                inputPosition="center"
                size={40}
                onFulfill={(isValid) => this.checkCode(isValid)}
                containerStyle={{ marginTop: " 3%" }}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  code: {},
  container: {
    flex: 1,
  },
  blockTop: {
    height: 155,
    width: "100%",
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
  button: {
    height: 40,
    backgroundColor: "#fff",
    width: "73%",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "7%",
  },
  buttonText: {
    textAlign: "center",
    color: "#4a7bb5",
    fontSize: 18,
  },
  input: {
    height: "90%",
    // backgroundColor:'red',
    width: "10%",
    borderWidth: 1,
    borderColor: "#d9e3f9",
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 0,
    marginTop: 15,
    textAlign: "center",
    backgroundColor: "#fff",
    marginHorizontal: "1.3%",
    color: "#000000",
    fontSize: 20,
  },
});
