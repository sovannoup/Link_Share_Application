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
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";

// Add

import IconAntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class screenHomeDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      Lg: "",
      name: "",
      phone: "",
      adress: "",
      price: "",
      templateId: "",
      true: "success",
    };
  }
  componentDidMount() {
    // this.props.f_orderTemplate();
    const { navigation } = this.props;
    var data = navigation.getParam("data", false);
    this.setState({ templateId: data.id, price: data.price });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { home } = this.props;
    if (
      nextProps.home.result_order &&
      nextProps.home.result_order != home.result_order
    ) {
      if (nextProps.home.result_order.message === "success") {
        NavigationService.navigate(NAV_TYPES.HOME);
        alert("Successfully bought");
      }
    }
  }

  handleFullInfo() {
    const { name, phone, adress, templateId, price } = this.state;
    if (name != "" && phone != "" && adress != "") {
      //
      this.props.f_orderTemplate({
        name: name,
        phone: phone,
        address: adress,
        temid: templateId,
        income: price,
        date: moment().format("YYYY/MM/DD-HH:mm:ss"),
      });
    } else {
      if (name.length == 0 || phone.length == 0 || adress.length == 0)
        alert("Please input every column...");
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F3FBFF" }}>
        <TouchableOpacity
          style={styles.btnicon}
          onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
        >
          <Image
            style={styles.icon}
            source={require("./../Assets/Icon/elements/a3.png")}
          />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <Text style={styles.textheader}>Template Order</Text>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <LinearGradient
              colors={["#2477B2", "#1758A1", "#104797"]}
              style={styles.blockFirst}
            >
              <View style={styles.rigth}>
                <View style={styles.form}>
                  <Text style={styles.label}>Name </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(name) => {
                      this.setState({ name: name });
                      //console.log(name)
                    }}
                  />
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Phone </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(phone) => {
                      this.setState({ phone: phone });
                      //console.log(phone)
                    }}
                  />
                </View>
                <View style={styles.form1}>
                  <Text style={styles.phone}>Address</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={styles.inputtxtArea}
                    onChangeText={(adress) => {
                      this.setState({ adress: adress });
                      //console.log(adress)
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.blockBottom}>
            <Text style={styles.textPrice}>Price: {this.state.price}$</Text>
            <LinearGradient
              colors={["#2c71ac", "#114898"]}
              style={styles.button}
            >
              <TouchableOpacity
                style={styles.com}
                onPress={() => this.handleFullInfo()}
              >
                <Text style={styles.buttonText}>Confirm to Buy</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  com: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  phone: {
    marginBottom: 60,
    fontSize: 16,
    color: "#fff",
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 14,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    height: "14%",
  },
  form1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    height: "50%",
  },
  container: {},
  blockTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blockFirst: {
    marginVertical: 20,
    paddingHorizontal: "1%",
    paddingVertical: "3%",
    borderRadius: 15,
    flexDirection: "row",
    width: "90%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  blockBottom: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    flexDirection: "row",
  },

  input: {
    fontSize: 16,
    height: "100%",
    width: "79%",
    paddingVertical: 0,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginLeft: "1.5%",
    backgroundColor: "white",
    /*  paddingHorizontal:'1%', */
  },

  inputtxtArea: {
    fontSize: 16,
    height: "100%",
    width: "79%",
    textAlignVertical: "top",
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },

  button: {
    height: 50,
    backgroundColor: "#195ca3",
    borderRadius: 30,
    width: "58%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  icon: {
    width: 35,
    height: 35,
  },

  btnicon: {
    width: 35,
    marginTop: 20,
    marginLeft: 20,
  },

  textheader: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#14509C",
    marginTop: "10%",
  },

  textPrice: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#14509C",
  },
});
