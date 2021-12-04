import React, { Component, useState } from "react";
import {
  button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
  Switch /* ,Modal */,
  Pressable,
} from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import IconF, { FA5Style } from "react-native-vector-icons/FontAwesome";
import IconFs from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";
import IconMi from "react-native-vector-icons/MaterialIcons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconFa from "react-native-vector-icons/Feather";
import { TouchableRipple } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import SwitchToggle from "react-native-switch-toggle";

export default class SeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false,
      isSwitchOn: false,
      setIsSwitchOn: false,
    };
  }

  render() {
    const { modalVisible, isSwitchOn, setIsSwitchOn } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#07cdce" }}>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={600}
          closeOnDragDown={true}
          openDuration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              /*  paddingBottom:30 */
            },
          }}
        >
          <Text style={{ marginLeft: "5%", fontSize: 18, paddingBottom: 10 }}>
            Type of business
          </Text>
          <View style={styles.fun}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: 40,
                  height: "100%",
                  position: "absolute",
                  right: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon1 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon2 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon3 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon4 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon5 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon6 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon7 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon8 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon9 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon10 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon11 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon12 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon13 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon14 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon15 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon16 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon17 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon18 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon19 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.icon20 ? (
                    <IconA
                      style={{ color: "#07cdce", fontSize: 18 }}
                      name="checkcircle"
                    />
                  ) : null}
                </View>
              </View>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: true });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Beauty & Wellness
                </Text>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: true });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Electronics
                </Text>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: true });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Enterainment
                </Text>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: true });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Fashion & Accessories
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: true });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Food & Beverage
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: true });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Grocery & Household Products
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: true });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Health & Medicine
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: true });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Stationary & Office SUpplies
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: true });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Sport & Recreation
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: true });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });

                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Travel & Living
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: true });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Education & Training
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: true });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Events & Culture
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: true });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Telecommunications
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: true });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Driver Service
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: true });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Vehicle Pepair & Maintenance
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: true });
                  this.setState({ icon17: false });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Hotel & Accommodation
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: true });
                  this.setState({ icon18: false });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Construction Material
                </Text>
              </TouchableRipple>

              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
                style={styles.btn}
                onPress={(text) => {
                  this.setState({ icon1: false });
                  this.setState({ icon2: false });
                  this.setState({ icon3: false });
                  this.setState({ icon4: false });
                  this.setState({ icon5: false });
                  this.setState({ icon6: false });
                  this.setState({ icon7: false });
                  this.setState({ icon8: false });
                  this.setState({ icon9: false });
                  this.setState({ icon10: false });
                  this.setState({ icon11: false });
                  this.setState({ icon12: false });
                  this.setState({ icon13: false });
                  this.setState({ icon14: false });
                  this.setState({ icon15: false });
                  this.setState({ icon16: false });
                  this.setState({ icon17: false });
                  this.setState({ icon18: true });
                }}
              >
                <Text
                  style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
                >
                  Gas Station
                </Text>
              </TouchableRipple>

              <View style={{ paddingVertical: "3%", width: "100%" }}></View>

              <View style={{ paddingVertical: "3%", width: "100%" }}></View>

              <View style={{ paddingVertical: "3%", width: "100%" }}></View>
              <View style={{ paddingVertical: "3%", width: "100%" }}></View>
            </ScrollView>
          </View>
        </RBSheet>
        <View style={{ flex: 1 }}>
          <TouchableRipple
            borderless={true}
            onPress={() => console.log("Pressed")}
            style={{
              marginLeft: "1%",
              width: 35,
              height: 35,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
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
            <Text style={styles.headerText}>Business Details</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.profile}>
              <View style={styles.pic}>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    opacity: 0.8,
                    width: "100%",
                    height: 30,
                    backgroundColor: "#07cdce",
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconM
                    name="camera"
                    style={{ color: "white", fontSize: 25 }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 19,
                    color: "#535454",
                    fontWeight: "bold",
                  }}
                >
                  mane{" "}
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 19,
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  By M.DEOUND
                </Text>
                <IconFa
                  style={{
                    right: 0,
                    marginLeft: 10,
                    fontSize: 20,
                    marginTop: 20,
                    color: "#07cdce",
                  }}
                  name="info"
                />
              </View>
            </View>
            <View style={{ width: "100%", marginVertical: 10 }}>
              <View style={styles.info}>
                <View style={styles.infoLeft}>
                  <Text style={{ fontSize: 25 }}>1</Text>
                  <Text style={{ fontSize: 11 }}>OUTLET</Text>
                </View>
                <View style={styles.infoRight}>
                  <Text style={{ fontSize: 25 }}>1</Text>
                  <Text style={{ fontSize: 11 }}>CASHIERS</Text>
                </View>
              </View>
            </View>

            <View style={styles.function}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginLeft: "3%" }}
              >
                Business Infomation
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }} /* onPress={()=>this.openPanel()} */ /*   rippleColor="rgba(225,225,2251)" */
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <IconF
                    style={{ fontSize: 23, color: "gray" }}
                    name="suitcase"
                  />
                  <Text style={{ marginLeft: 15 }}>type: Electronics</Text>
                  <TouchableRipple
                    borderless={true}
                    style={{
                      marginLeft: "45%",
                      width: 35,
                      height: 35,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                    }}
                    onPress={() => console.log("Pressed")}
                    onPress={() => this.RBSheet.open()}
                  >
                    <IconMi
                      style={{ fontSize: 23, color: "#07cdce" }}
                      name="edit"
                    />
                  </TouchableRipple>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "5%",
                  marginRight: "6%",
                  alignItems: "center",
                }}
              >
                <IconFs
                  style={{ fontSize: 23, color: "gray" }}
                  name="university"
                />
                <Text style={{ marginLeft: 15 }}>
                  Linked ABA Account: 002 951 259
                </Text>
              </View>
            </View>
          </ScrollView>
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
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  infoLeft: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRightWidth: 1,
    borderColor: "gray",
  },
  infoRight: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  btn: {
    width: "100%",
    paddingVertical: "3%",
  },
  fun: {
    flexDirection: "column",
    marginTop: "2%",
  },
  pic: {
    width: 120,
    height: 120,
    /* flex:1, */
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: "#07cdce",
    overflow: "hidden",
  },
  profile: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  function: {
    paddingVertical: "3%",
    height: 120,
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "3%",
    fontWeight: "bold",
  },

  /* leaguage */
  /*  Ch:{
    width:'50%',
  }
  ,
  Eng:{
    width:'50%',
  }
  ,
  Kh:{
    width:'50%',
  }
  , */
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
  /*   cancel:{
    color:'red',
    marginBottom:15,
    fontSize:17,
  }, */
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
