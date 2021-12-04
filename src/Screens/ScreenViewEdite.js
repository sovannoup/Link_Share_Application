/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import NavigationService from "../Service/navigationService";
import { NAV_TYPES } from "../Navigation/navTypes";
import IconI from "react-native-vector-icons/Ionicons";
export default class ViewEdite extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.header}
          colors={["#2477B2", "#1758A1", "#104797"]}
        >
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => NavigationService.navigate(NAV_TYPES.EDIT)}
          >
            <IconI style={styles.Icon} name="ios-arrow-back-circle-sharp" />
          </TouchableOpacity>
          <View style={styles.cover}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              Title Name Of Template
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.coverEditBox}>
          <View style={styles.editBox}>
            <Image
              style={styles.editImg}
              source={require("../Assets/Images/Website-Templat.jpg")}
            />
          </View>

          {/*  <View style={styles.editNowBtn}> */}

          <LinearGradient
            style={styles.editNowBtn}
            colors={["#1757A1", "#2272AF"]}
          >
            <TouchableOpacity
              style={styles.btnText}
              onPress={() => NavigationService.navigate(NAV_TYPES.EDITTEMPLETE)}
            >
              <Text style={styles.text}>EDIT NOW</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/*  </View>     */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coverEditBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "8%",
    paddingHorizontal: "13%",
    height: "92%",
  },
  editImg: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "red",
    height: "100%",
  },
  editBox: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "red",
    height: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2.3,

    elevation: 8,
  },
  editNowBtn: {
    height: "7.4%",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    bottom: "3%",
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    height: 60,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  cover: {
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: "17%",
  },

  backIcon: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    left: "9%",
    bottom: "13%",
  },
  Icon: {
    fontSize: 30,
    color: "white",
  },

  edit: {
    width: "100%",
    backgroundColor: "#114898",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 100,

    /* height: '6%',
        width: '45%',
        justifyContent:'center',
        borderRadius:100,
        bottom:'3%',
        position:'absolute', */
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  btnText: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
