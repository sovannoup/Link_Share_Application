/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import NavigationService from "../Service/navigationService";
import { NAV_TYPES } from "../Navigation/navTypes";
import LinearGradient from "react-native-linear-gradient";
export default class ViewOrder extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#2477B2", "#1758A1", "#104797"]}
          style={styles.header}
        >
          <TouchableOpacity
            style={{ borderRadius: 50, width: 35, height: 35, marginLeft: 20 }}
            onPress={() => NavigationService.navigate(NAV_TYPES.ORDER)}
          >
            <Image
              style={styles.icon}
              source={require("../Assets/Icon/elements/a1.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              alignSelf: "center",
              color: "#fff",
              fontWeight: "bold",
              marginLeft: "25%",
            }}
          >
            Ordered
          </Text>
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.productBox}>
            <Image
              resizeMode={"cover"}
              style={styles.imgStyle}
              source={require("../Assets/img.jpg")}
            />
            <View style={{ flexDirection: "column", paddingLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Title of Product
              </Text>
              <Text style={{ fontSize: 15, marginVertical: "6%" }}>
                Price: 168$
              </Text>
              <Text style={{ fontSize: 15 }}>Qty: 1</Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                marginTop: "16%",
                marginLeft: "15%",
                fontWeight: "bold",
              }}
            >
              Total: 168$
            </Text>
          </View>

          <View style={styles.userInfo}>
            <View style={styles.userHeader}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Customer Information
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.varr}>Name</Text>
              <Text style={styles.data}>: Sea Vengseng</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.varr}>Tel</Text>
              <Text style={styles.data}>: 086995253</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.varr}>Address</Text>
              <Text style={styles.data}>: #12 St.123 Phnom Penh Cambodia</Text>
            </View>
          </View>

          <View style={styles.rowBtn}>
            <TouchableOpacity style={styles.already}>
              <Text style={styles.btnText}>Already</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancel}>
              <Text style={styles.btnText}>Canceled</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    height: 70,
    backgroundColor: "#195ca3",
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },
  body: {
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "column",
  },
  productBox: {
    marginVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imgStyle: {
    height: 80,
    width: "24%",
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: "column",
    borderRadius: 20,
    shadowColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: "5%",
  },
  userHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "7%",
  },
  row: {
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  varr: {
    fontSize: 17,
    width: "35%",
    fontWeight: "bold",
  },
  data: {
    width: "75%",
    fontSize: 17,
    flexWrap: "wrap",
  },
  rowBtn: {
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: "5%",
    justifyContent: "space-between",
  },
  already: {
    width: "47%",
    height: 35,
    backgroundColor: "#195ca3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "#4d73be",
  },
  cancel: {
    width: "47%",
    height: 35,
    backgroundColor: "#bf1e2d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnText: {
    color: "white",
    fontSize: 17,
  },
  icon: {
    width: 27,
    height: 28,
  },
});
