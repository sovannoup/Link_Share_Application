import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
  Switch,
} from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import IconFs from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";
import IconFo from "react-native-vector-icons/Foundation";
import { TouchableRipple } from "react-native-paper";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    /*      const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState); */
    return (
      <View style={{ flex: 1, backgroundColor: "#07cdce" }}>
        <View style={{ flex: 1 }}>
          <TouchableRipple
            style={styles.topBtn}
            borderless={true}
            onPress={() => console.log("h")}
          >
            <IconA
              name="arrowleft"
              style={{
                fontSize: 25,
                color: "white",
                marginLeft: "3%",
                marginTop: "2%",
              }}
            />
          </TouchableRipple>

          <View>
            <Text style={styles.headerText}>Contact Us</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            style={{ width: 300, height: 300, marginTop: "10%" }}
            source={require("../Assets/Images/chart.jpg")}
          />

          <View style={styles.footer}>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              style={styles.chart}
              rippleColor="#6DE2DF"
            >
              <View style={{ flexDirection: "row" }}>
                <IconA
                  style={{ fontSize: 19, color: "white" }}
                  name="message1"
                />
                <Text style={{ color: "white", marginLeft: "5%" }}>
                  Connect on messenger
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              style={styles.call}
              rippleColor="#6DE2DF"
            >
              <View style={{ flexDirection: "row" }}>
                <IconFs
                  style={{ fontSize: 19, color: "white" }}
                  name="headset"
                />
                <Text style={{ color: "white", marginLeft: "5%" }}>
                  Call Hotline
                </Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              style={styles.feedback}
              rippleColor="#BDF9F7"
            >
              <View style={{ flexDirection: "row" }}>
                <IconFo
                  style={{ fontSize: 23, color: "#01cdd4" }}
                  name="clipboard-notes"
                />
                <Text
                  style={{
                    color: "#01cdd4",
                    marginLeft: "5%",
                    fontWeight: "bold",
                  }}
                >
                  Leave FeedBack
                </Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 8,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },

  topBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 100,
  },
  chart: {
    flex: 1,
    backgroundColor: "#01cdd4",
    marginVertical: "1.5%",
    borderRadius: 5,
    alignItems: "center",
    paddingLeft: "3%",
    flexDirection: "row",
  },
  call: {
    flex: 1,
    backgroundColor: "#01cdd4",
    marginVertical: "1.5%",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
  },
  feedback: {
    flex: 1,
    borderWidth: 2,
    marginVertical: "1.5%",
    borderRadius: 5,
    borderColor: "#01cdd4",
    alignItems: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: "26%",
    bottom: 0,
    paddingHorizontal: "4%",
    paddingBottom: "5%",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "5%",
    fontWeight: "bold",
  },
});
