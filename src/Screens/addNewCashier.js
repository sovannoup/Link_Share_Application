import React, { Component, useState } from "react";
import {
  TextInput,
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
import IconFo from "react-native-vector-icons/Fontisto";
import { TouchableRipple } from "react-native-paper";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "react-native-image-crop-picker";

export default class AddNewCashier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      isEnabled: false,
      setIsEnabled: false,
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      imageOne: "",
      showBTN: false,
    };
  }

  selectImages(key) {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      const _data = "data:image/png;base64," + image.data;
      this.setState({
        [key]: _data,
      });
    });
  }

  onToggleSwitch = () => {
    this.setState({ setIsSwitchOn: isSwitchOn });
  };
  render() {
    const { modalVisible, isSwitchOn, setIsSwitchOn, imageOne } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#07cdce" }}>
        <View style={{ height: 80 }}>
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
            <Text style={styles.headerText}>Add New Cashier</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profile}>
              <TouchableOpacity
                style={styles.pic}
                onPress={() => this.selectImages("imageOne")}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      imageOne
                        ? { uri: imageOne }
                        : require("./../Assets/Images/ll.png")
                    }
                  />
                }
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
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 25,
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  Tap here to upload photo
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 19,
                  color: "#535454",
                  fontWeight: "bold",
                }}
              >
                Mane Deoun
              </Text>
            </View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Cashier Detail
            </Text>
            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="user-alt"
              />
              <TextInput
                onChangeText={(textOne) => {
                  this.setState({ text1: textOne });
                  if (
                    textOne.length > 0 &&
                    this.state.text2.length > 0 &&
                    this.state.text3.length > 0 &&
                    this.state.text4.length > 0
                  ) {
                    this.setState({ showBTN: true });
                  } else {
                    this.setState({ showBTN: false });
                  }
                }}
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="First name"
              />
            </View>

            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="user-alt"
              />
              <TextInput
                onChangeText={(textTwo) => {
                  this.setState({ text2: textTwo });
                  if (
                    textTwo.length > 0 &&
                    this.state.text1.length > 0 &&
                    this.state.text3.length > 0 &&
                    this.state.text4.length > 0
                  ) {
                    this.setState({ showBTN: true });
                  } else {
                    this.setState({ showBTN: false });
                  }
                }}
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="Last name"
              />
            </View>

            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="address-card"
              />
              <TextInput
                onChangeText={(textThree) => {
                  this.setState({ text3: textThree });
                  if (
                    textThree.length > 0 &&
                    this.state.text2.length > 0 &&
                    this.state.text1.length > 0 &&
                    this.state.text4.length > 0
                  ) {
                    this.setState({ showBTN: true });
                  } else {
                    this.setState({ showBTN: false });
                  }
                }}
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="Nationsl ID (Optional)"
              />
            </View>

            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="phone-alt"
              />
              <TextInput
                onChangeText={(textFour) => {
                  this.setState({ text4: textFour });
                  if (
                    textFour.length > 0 &&
                    this.state.text2.length > 0 &&
                    this.state.text3.length > 0 &&
                    this.state.text1.length > 0
                  ) {
                    this.setState({ showBTN: true });
                  } else {
                    this.setState({ showBTN: false });
                  }
                }}
                keyboardType="numeric"
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="Phone number"
              />
            </View>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 20 }}>
              Linked Outlets
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <IconFs
                style={{ fontSize: 17, color: "gray", marginRight: 15 }}
                name="store"
              />
              <Text>mane By M.DEOUN</Text>
            </View>

            <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 20 }}>
              Permission
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
                marginBottom: 50,
              }}
            >
              <Text>transactions redund</Text>
              <Switch
                style={{ position: "absolute", right: 0 }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                value={isSwitchOn}
                onValueChange={this.onToggleSwitch}
              />
            </View>
          </ScrollView>
          <View
            style={{
              height: 90,
              width: 100000,
              position: "absolute",
              bottom: 0,
              borderTopWidth: 0.7,
              borderColor: "gray",
              backgroundColor: "white",
            }}
          ></View>
          <TouchableOpacity
            disabled={this.state.showBTN == true ? 0 : 1}
            style={
              this.state.showBTN == false
                ? styles.btn
                : [styles.btn, { backgroundColor: "#07cdce" }]
            }
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  topBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 100,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "5%",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
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
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#dee5e5",
    marginBottom: 20,
    borderRadius: 5,
  },
});
