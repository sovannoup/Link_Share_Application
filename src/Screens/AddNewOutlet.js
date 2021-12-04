import React, { Component, useState } from "react";
import {
  ImageBackground,
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import IconFs from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";
import IconFo from "react-native-vector-icons/Fontisto";
import IconI from "react-native-vector-icons/Ionicons";
import { TouchableRipple } from "react-native-paper";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import Switch from "react-switch";

export default class AddNewOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showInput: false,
      isEnabled: false,
      setIsEnabled: false,
      text1: "",
      text2: "",
      text3: "",
      showBTN: false,
    };
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  onToggleSwitch = () => {
    this.setState({ setIsSwitchOn: isSwitchOn });
  };
  render() {
    const image = {
      uri: "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg",
    };
    const { modalVisible, isSwitchOn, setIsSwitchOn } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#07cdce" }}>
        <View style={{ flex: 2 }}>
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
            <Text style={styles.headerText}>Add New Outlet</Text>
          </View>
          <IconE
            style={{
              position: "absolute",
              fontSize: 100,
              color: "gray",
              top: 80,
              left: 150,
            }}
            name="image"
          />
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="store"
              />
              <TextInput
                onChangeText={(textOne) => {
                  this.setState({ text1: textOne });
                }}
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="mane by M.DEOUN"
              />
            </View>

            <View style={styles.input}>
              <IconFs
                style={{ fontSize: 20, marginLeft: 15, color: "gray" }}
                name="building"
              />
              <TextInput
                onChangeText={(textTwo) => {
                  this.setState({ text2: textTwo });
                }}
                style={{ paddingLeft: 22, padding: 0 }}
                placeholder="Oult city / province"
              />
            </View>

            <View style={styles.input}>
              <IconI
                style={{ fontSize: 25, marginLeft: 11, color: "gray" }}
                name="ios-location"
              />
              <TextInput
                onChangeText={(textThree) => {
                  this.setState({ text3: textThree });
                }}
                style={{ paddingLeft: 15, padding: 0 }}
                placeholder="Outlet address"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15,
                marginBottom: 50,
              }}
            >
              <Text>transactions redund</Text>
              {/*  <Switch
            style={{position:'absolute',right:0}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        value={isSwitchOn} onValueChange={this.onToggleSwitch}
        
      
      />
 */}

              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
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
            onPress={() => console.log(this.state)}
            disabled={
              this.state.text1.length > 0 &&
              this.state.text2.length > 0 &&
              this.state.text3.length > 0
                ? 0
                : 1
            }
            style={
              this.state.text1.length > 0 &&
              this.state.text2.length > 0 &&
              this.state.text3.length > 0
                ? [styles.btn, { backgroundColor: "#07cdce" }]
                : styles.btn
            }
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 4,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 100,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#e4e4e4",
    marginBottom: 20,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
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
});
