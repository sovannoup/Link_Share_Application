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
import IconEd from "react-native-vector-icons/Entypo";
import IconE from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFs from "react-native-vector-icons/FontAwesome5";
import IconFo from "react-native-vector-icons/Fontisto";
import { TouchableRipple } from "react-native-paper";
import { TextInput } from "react-native-paper";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      show: false,
      show2: false,
      text1: "",
      text2: "",
      showBTN: false,
      showIcon: "eye-off",
      showIcon2: "eye-off",
      /*  eye="", */
    };
  }
  sh = () => {
    if (this.state.showIcon == "eye-off") {
      this.setState({ showIcon: "eye" });
      this.setState({ show: true });
    } else {
      this.setState({ showIcon: "eye-off" });
      this.setState({ show: false });
    }
  };
  sh2 = () => {
    if (this.state.showIcon2 == "eye-off") {
      this.setState({ showIcon2: "eye" });
      this.setState({ show2: true });
    } else {
      this.setState({ showIcon2: "eye-off" });
      this.setState({ show2: false });
    }
  };
  /*  componentDidMoun(){
        this.setState({icon:'eye'});
        console.log(this.state.icon)
      } */
  render() {
    var { /* Icond="eye", */ Icon = "eye-off" } = this.props;
    /*      const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState); */
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
            <Text style={styles.headerText}>Change Password</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <View style={styles.lockHeader}>
              <IconFo
                style={{ fontSize: 55, color: "#07cdce" }}
                name="locked"
              />
              <Text style={{ fontSize: 17, marginTop: "3%" }}>
                Creat New Password
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <TextInput
                style={{
                  width: "92%",
                  height: 50,
                  backgroundColor: "white",
                  color: "red",
                }}
                mode="outlined"
                label="Enter new password"
                secureTextEntry={this.state.show == false ? true : false}
                onChangeText={(text) => {
                  var num = /^[0-9]+$/;
                  var title = /^(?=.*\d)(?=.*[a-zA-Z]).*$/;
                  var space = /^\S*$/;
                  this.setState({ text1: text });
                  /*  if(this.state.text1==this.state.text2){
        this.setState({showBTN:true})
    } if(this.state.text1!=this.state.text2){
        this.setState({showBTN:false})
    } */
                  if (
                    text.length >= 5 &&
                    text.length <=
                      18 /* && text.match(num) */ /*  && text.match(title) */
                  ) {
                    this.setState({ validatDigit: true, text1: text });
                  }
                  if (text.length < 5 || text.length > 18) {
                    this.setState({ showInput: false });
                    /* this.setState({DvalidatDigit:true}); */
                    this.setState({ validatDigit: false });
                  }
                  if (text.match(title)) {
                    this.setState({ validatCharacters: true });
                  }
                  if (!text.match(title)) {
                    this.setState({ validatCharacters: false });
                  }
                  if (
                    text.length >= 5 &&
                    text.length <= 18 &&
                    text.match(title) &&
                    text.match(space)
                  ) {
                    this.setState({ showInput: true });
                  }
                  if (
                    text.length < 5 ||
                    text.length > 18 ||
                    !text.match(title) ||
                    !text.match(space)
                  ) {
                    this.setState({ showInput: false });
                    this.setState({ showBTN: false });
                  }
                  if (text.match(space) && text != "") {
                    this.setState({ DvalidatSpace: true });
                  } else {
                    this.setState({ DvalidatSpace: false });
                  }
                }}
                left={
                  <TextInput.Icon
                    style={{ marginTop: "60%", color: "red" }}
                    name="lock"
                  />
                }
              />
              <TouchableOpacity style={styles.eye} onPress={() => this.sh()}>
                <IconE name={this.state.showIcon} size={20} />
              </TouchableOpacity>
              <View style={styles.validation}>
                {/* <View style={{flexDirection:'row',alignItems: 'center',marginVertical:5}}>
    <IconA style={{color:'gray',marginRight:10}}name="checkcircle"  /><Text style={{color:'gray'}}>Must have 5-18 characters</Text>
    </View> */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                  }}
                >
                  <IconA
                    style={{ color: "gray", marginRight: 10 }}
                    name="checkcircle"
                  />
                  <Text style={{ color: "gray" }}>
                    Must have 5-18 characters
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                  }}
                >
                  <IconA
                    style={{ color: "gray", marginRight: 10 }}
                    name="checkcircle"
                  />
                  <Text style={{ color: "gray" }}>
                    Must have at least 1 number & 1 letter
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                  }}
                >
                  <IconA
                    style={{ color: "gray", marginRight: 10 }}
                    name="checkcircle"
                  />
                  <Text style={{ color: "gray" }}>Must not have space</Text>
                </View>

                {this.state.validatDigit ? (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 5,
                      position: "absolute",
                      top: 0,
                      left: "10%",
                    }}
                  >
                    <IconA
                      style={{ color: "#07cdce", marginRight: 10 }}
                      name="checkcircle"
                    />
                    <Text style={{ color: "#07cdce" }}>
                      Must have 5-18 characters
                    </Text>
                  </View>
                ) : null}

                {this.state.validatCharacters ? (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 5,
                      position: "absolute",
                      top: 29,
                      left: "10%",
                    }}
                  >
                    <IconA
                      style={{ color: "#07cdce", marginRight: 10 }}
                      name="checkcircle"
                    />
                    <Text style={{ color: "#07cdce" }}>
                      Must have at least 1 number & 1 letter
                    </Text>
                  </View>
                ) : null}

                {this.state.DvalidatSpace ? (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 5,
                      position: "absolute",
                      top: "66.6%",
                      left: "10%",
                    }}
                  >
                    <IconA
                      style={{ color: "#07cdce", marginRight: 10 }}
                      name="checkcircle"
                    />
                    <Text style={{ color: "#07cdce" }}>
                      Must not have space
                    </Text>
                  </View>
                ) : null}
              </View>

              {this.state.showInput ? (
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: 150,
                    paddingTop: 25,
                    alignItems: "center",
                    position: "absolute",
                    top: 60,
                  }}
                >
                  <TextInput
                    secureTextEntry={this.state.show2 == false ? true : false}
                    mode="outlined"
                    label="pass"
                    style={{
                      width: "92%",
                      height: 50,
                      backgroundColor: "white",
                      color: "red",
                    }}
                    placeholder="Comfirm password"
                    onChangeText={(textCom) => {
                      if (textCom.length > 0) {
                        this.setState({ text2: textCom });
                      }
                      if (textCom.length > 0 && textCom == this.state.text1) {
                        this.setState({ showBTN: true });
                      } else {
                        this.setState({ showBTN: false });
                      }
                    }}
                  />
                  <TouchableOpacity
                    style={styles.eye2}
                    onPress={() => this.sh2()}
                  >
                    <IconE name={this.state.showIcon2} size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </ScrollView>
          <TouchableOpacity
            disabled={this.state.showBTN == true ? 0 : 1}
            style={styles.footer}
          >
            <View
              style={
                this.state.showBTN == false
                  ? styles.feedback
                  : [styles.feedback, { backgroundColor: "#07cdce" }]
              }
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Continue
              </Text>
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
  },
  eye: {
    position: "absolute",
    right: 35,
    top: 23,
  },
  eye2: {
    position: "absolute",
    right: 35,
    top: 45,
  },
  topBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 100,
  },
  validation: {
    marginTop: 20,
    width: "100%",
    paddingLeft: " 9%",
    /* backgroundColor:'red', */
  },
  lockHeader: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
  },
  feedback: {
    flex: 1,
    marginVertical: "1.5%",
    borderRadius: 5,
    borderColor: "#01cdd4",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
  },
  footer: {
    borderWidth: 1,
    paddingTop: 10,
    borderColor: "#e8e8e8",
    width: "100%",
    height: 80,
    bottom: 0,
    paddingHorizontal: "4%",
    paddingBottom: "2%",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "5%",
    fontWeight: "bold",
  },
});
