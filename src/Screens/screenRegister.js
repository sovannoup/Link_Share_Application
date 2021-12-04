import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  AsyncStorage,
} from "react-native";
/* import TooltipAlert from "react-native-tooltip-alert"; */
import { color } from "react-native-reanimated";
import { NAV_TYPES } from "./../Navigation/navTypes";
import CustomText from "../component/customtext";
import Button from "../component/Button";
import NavigationService from "./../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
export default class Register extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      title: "",
      Lg: [],
      fullMobileNumber: "",
      shopName: "",
      phoneNumber: "",
    };
  }

  /*   componentDidMount() {
    this.props.g_language({});    


    AsyncStorage.getItem("@pushDeviceId").then(stores => {
        this.setState({
            deviceToken:stores
        })
    });
} */

  componentDidMount() {
    // this.props.g_language();
    // console.log("hhh", this.props);
    // const fullMobileNumber = this.props.navigation.getParam("fullMobileNumber");
    // this.setState({ fullMobileNumber: fullMobileNumber });
    // AsyncStorage.getItem("@pushDeviceId").then((stores) => {
    //   this.setState({
    //     deviceToken: stores,
    //   });
    // });
    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(this.props);
    const { user } = this.props;
    if (
      nextProps.user.r_register &&
      nextProps.user.r_register != user.r_register
    ) {
      console.log("resultttttt", nextProps.r_register);
      if (nextProps.user.r_register.message === "success") {
        this.setState({ Lg: nextProps.user.r_register.results });
        console.log("ok sir");
      }
    }
  }

  handleFullName() {
    var string = /^[A-Za-z]+$/g;
    const { shopName, phoneNumber } = this.state;
    if (
      shopName != "" &&
      phoneNumber != "" &&
      phoneNumber.length > 7 &&
      phoneNumber != string
    ) {
      this.props.f_register({
        shopname: shopName,
        phonenumber: phoneNumber,
        date: "03/12/2021-09:06",
      });
    } else {
      if (phoneNumber.length == 0) alert("Input Phoner Number...");
      if (shopName.length == 0) alert("Input Shop Name...");
      if (phoneNumber.length <= 7 && phoneNumber.length != 0)
        alert("phone Number more then 7");
      /*if(shopName!=string)
            alert("Shop name must have string") */
    }
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
          {/*  custom Language */}
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
                source={require("./../Assets/Icon/elements/a5.png")}
              />
              <TextInput
                style={styles.input}
                placeholder="Shop Name"
                placeholderTextColor="#95a2b0"
                onChangeText={(shop_name) => {
                  this.setState({ shopName: shop_name });
                }}
              />
            </View>
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
                onChangeText={(phone_number) => {
                  this.setState({ phoneNumber: phone_number });
                }}
              />
            </View>
            <View
              style={{ marginTop: "9%", width: "100%", alignItems: "center" }}
            >
              <Button
                style={{ marginTop: "9%" }}
                title="Register"
                press={() => this.handleFullName()}
              />
            </View>
            <TouchableOpacity
              style={styles.TextLogin}
              onPress={() => NavigationService.navigate(NAV_TYPES.LOGIN)}
            >
              <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  TextLogin: {
    marginRight: "8%",
  },
  container: {
    flex: 1,
  },
  blockTop: {
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
  },
  headerLogo: {
    marginTop: "20%",
    position: "relative",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: "5%",

    // resizeMode: 'contain'
  },
  input: {
    height: 46,
    width: "90%",
    paddingHorizontal: 20,
    marginTop: 3,
    color: "#95a2b0",
    fontSize: 18,
    color: "white",
  },
  box: {
    height: 45,
    // backgroundColor:'red',
    width: "70%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    width: 21,
    height: 24,
    marginLeft: 10,
  },
  button: {
    height: 40,
    backgroundColor: "#fff",
    width: "70%",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "9%",
  },
  buttonText: {
    textAlign: "center",
    color: "#346cab",
    fontSize: 18,
    fontWeight: "bold",
  },
  Text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
    marginLeft: "70%",
    marginTop: 30,
  },
  /* leaguage */
  Ch: {
    width: "50%",
  },
  Eng: {
    width: "50%",
  },
  Kh: {
    width: "50%",
  },
  modalView: {
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    padding: 20,
    bottom: 0,
  },
  textlanguage: {
    color: "white",
    fontSize: 17,
  },
  buttonAlert: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },

  buttonClose: {},
  textStyle: {
    color: "black",
    marginVertical: 15,
    fontSize: 17,
  },
  cancel: {
    color: "red",
    marginBottom: 15,
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
