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
  Switch /* ,Modal */,
  Pressable,
} from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import IconFs, { FA5Style } from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple } from "react-native-paper";
import ImagePicker from "react-native-image-crop-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import SwitchToggle from "react-native-switch-toggle";

export default class Sett extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageOne: "",
      swipeablePanelActive: false,
      isEnabled: false,
      setIsEnabled: false,
      previousState: false,
    };
  }
  toggleSwitch = () => {
    this.setIsEnabled ? previousState : previousState;
  };

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
  /*  const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => setIsEnabled(previousState => !previousState); */
  //start screen
  /*  componentDidMount(){
        this.setState({ isSwitchOn: true });
      
        }
        componentDidMount = () => {
            this.setState({ swipeablePanelActive: false });
        }; */

  render() {
    /* const { modalVisible,isSwitchOn,setIsSwitchOn } = this.state; */
    const { isEnabled, setIsEnabled, imageOne } = this.state;
    /*  const toggleSwitch = () =>setIsEnabled(this.previousState = !this.previousState); */
    return (
      <View style={{ flex: 1, backgroundColor: "#07cdce" }}>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={300}
          closeOnDragDown={true}
          openDuration={250}
          customStyles={{
            container: {
              borderRadius: 10,
            },
          }}
        >
          <Text style={{ marginLeft: "5%", fontSize: 18 }}>
            Go Home Screen after
          </Text>
          <View style={styles.fun}>
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
              }}
            >
              <Text
                style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
              >
                30 Seconds
              </Text>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              rippleColor="rgba(225,225,2251)"
              style={styles.btn}
              onPress={(text) => {
                this.setState({ icon2: true });
                this.setState({ icon1: false });
                this.setState({ icon3: false });
                this.setState({ icon4: false });
              }}
            >
              <Text
                style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
              >
                1 Minute
              </Text>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              rippleColor="rgba(225,225,2251)"
              style={styles.btn}
              onPress={(text) => {
                this.setState({ icon3: true });
                this.setState({ icon2: false });
                this.setState({ icon1: false });
                this.setState({ icon4: false });
              }}
            >
              <Text
                style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
              >
                2 Minute
              </Text>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              rippleColor="rgba(225,225,2251)"
              style={styles.btn}
              onPress={(text) => {
                this.setState({ icon4: true });
                this.setState({ icon2: false });
                this.setState({ icon3: false });
                this.setState({ icon1: false });
              }}
            >
              <Text
                style={{ marginLeft: "5%", fontSize: 17, color: "#07cdce" }}
              >
                3 Minute
              </Text>
            </TouchableRipple>
          </View>
        </RBSheet>
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
            <Text style={styles.headerText}>Settings</Text>
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
                        : require("./../Assets/Images/l.png")
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
            <View style={styles.function}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginLeft: "3%" }}
              >
                Privacy & Security
              </Text>
              <TouchableRipple
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
                onPress={() => console.log("Pressed")}
                onPress={() => this.RBSheet.open()}
                /* onPress={()=>this.openPanel()} */ rippleColor="rgba(225,225,2251)"
              >
                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                  <IconM
                    style={{ fontSize: 23, color: "#07cdce" }}
                    name="clock-time-four"
                  />
                  <Text style={{ marginLeft: 15 }}>
                    Go Home Screen after 30 Seconds
                  </Text>
                </View>
              </TouchableRipple>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "5%",
                  marginRight: "6%",
                  alignItems: "center",
                }}
              >
                <IconM
                  style={{ fontSize: 23, color: "#07cdce" }}
                  name="clock-time-four"
                />
                <Text style={{ marginLeft: 15 }}>Dynamic PIN Pad</Text>
                <Switch
                  style={{ position: "absolute", right: 0 }}
                  trackColor={{ false: "#767577", true: "red" }}
                  onValueChange={this.toggleSwitch}
                  value={this.isEnabled}
                />

                {/* <SwitchToggle
  switchOn={true}
  
  circleColorOff='#C4C4C4'
  circleColorOn='#00D9D5'
  backgroundColorOn='#6D6D6D'
  backgroundColorOff='#C4C4C4'
/> */}
              </View>
              <TouchableRipple
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
              >
                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                  <IconM
                    style={{ fontSize: 23, color: "#07cdce" }}
                    name="lock"
                  />
                  <Text style={{ marginLeft: 15 }}>Change Password</Text>
                </View>
              </TouchableRipple>

              <TouchableRipple
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
              >
                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                  <IconFs
                    style={{ fontSize: 23, color: "#07cdce" }}
                    name="user-alt"
                  />
                  <Text style={{ marginLeft: 15 }}>
                    Go Home Screen after 30 Seconds
                  </Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
              >
                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                  <IconM
                    style={{ fontSize: 23, color: "#07cdce" }}
                    name="clock-time-four"
                  />
                  <Text style={{ marginLeft: 15 }}>
                    Go Home Screen after 30 Seconds
                  </Text>
                </View>
              </TouchableRipple>
            </View>

            <View style={styles.language}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginLeft: "3%" }}
              >
                Language
              </Text>

              <TouchableRipple
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(225,225,2251)"
              >
                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                  <IconM
                    style={{ fontSize: 23, color: "#07cdce" }}
                    name="earth"
                  />
                  <Text style={{ marginLeft: 15 }}>ភាសាខ្មែរ</Text>
                </View>
              </TouchableRipple>
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    width: "100%",
    paddingVertical: "3%",
  },
  fun: {
    flexDirection: "column",
    marginTop: "8%",
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
  function: {
    paddingVertical: "3%",
    height: 300,

    justifyContent: "space-between",
  },
  language: {
    paddingVertical: "3%",
    height: 120,
    justifyContent: "space-between",
    marginTop: 30,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "3%",
    fontWeight: "bold",
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
