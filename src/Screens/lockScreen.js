import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import IconF from "react-native-vector-icons/Feather";
import IconFo from "react-native-vector-icons/Foundation";
import IconF5 from "react-native-vector-icons/FontAwesome5";
/* import IconM from 'react-native-vector-icons/MaterialIcons'; */

export default class Lock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ["", "", "", ""],
    };
  }
  //function
  _onPressNumber = (num) => {
    let tempCode = this.state.passcode;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == "") {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode });
  };
  _onPressC = () => {
    let tempCode = this.state.passcode;
    for (var i = tempCode.length - 1; i >= 0; i = i - 1) {
      if (tempCode[i] != "") {
        tempCode[i] = "";
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode });
  };
  _onPressCancel = () => {
    let tempCode = this.state.passcode;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != "") {
        tempCode[i] = "";
        break;
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode });
  };

  render() {
    let number = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: "0" },
    ];

    return (
      <LinearGradient
        colors={["#02ccd3", "#0294ad", "#045c84"]}
        style={styles.container}
      >
        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(225,225,2251)"
          style={styles.cancelBtn}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableRipple>
        <View style={styles.lockIcon}>
          <IconFo name="lock" style={{ color: "white", fontSize: 45 }} />

          <View
            style={{
              width: 90,
              height: 30,
              backgroundColor: "white",
              borderRadius: 50,
              flexDirection: "row",
              marginTop: "1%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 2,
            }}
          >
            <View>
              <IconF5
                name="star-of-life"
                style={{ fontSize: 15, color: "#03ccc7", marginHorizontal: 2 }}
              />
            </View>
            <View>
              <IconF5
                name="star-of-life"
                style={{ fontSize: 15, color: "#03ccc7", marginHorizontal: 2 }}
              />
            </View>
            <View>
              <IconF5
                name="star-of-life"
                style={{ fontSize: 15, color: "#03ccc7", marginHorizontal: 2 }}
              />
            </View>
            <View>
              <IconF5
                name="star-of-life"
                style={{ fontSize: 15, color: "#03ccc7", marginHorizontal: 2 }}
              />
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              color: "white",
              fontSize: 17,
            }}
          >
            Enter PIN to unlock app screen
          </Text>
        </View>
        {/*   <IconM name="home"/> */}

        <View style={styles.coverNumber}>
          {this.state.passcode.map((p) => {
            let style = p != "" ? styles.number1 : styles.number;
            console.log(p);
            return <View style={style}></View>;
          })}
        </View>
        <View>
          <View style={styles.coverNumberPin}>
            {number.map((num, index) => {
              return (
                <View style={styles.numberPin} key={index}>
                  <TouchableRipple
                    style={styles.numberPin1}
                    borderless={true}
                    rippleColor="rgba(225, 225, 2251)"
                    onPress={() => this._onPressNumber(num.id)}
                    /* onPress={()=>console.log(num.id)} */
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {num.id}
                    </Text>
                  </TouchableRipple>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            height: "16.5%",
            width: "33.33%",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "-1%",
            left: "1%",
          }}
        >
          <TouchableRipple
            borderless={true}
            rippleColor="rgba(225, 225, 2251)"
            style={styles.c}
            onPress={() => this._onPressC()}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#08d4d6" }}
            >
              C
            </Text>
          </TouchableRipple>
        </View>
        <View
          style={{
            height: "16.5%",
            width: "33.33%",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "-1%",
            right: "5%",
          }}
        >
          <TouchableRipple
            borderless={true}
            rippleColor="rgba(225, 225, 2251)"
            style={styles.c}
            onPress={() => this._onPressCancel()}
          >
            <IconF
              name="delete"
              style={{ fontSize: 20, fontWeight: "bold", color: "#08d4d6" }}
            />
          </TouchableRipple>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  c: {
    left: "6%",
    bottom: "-1%",
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    borderRadius: 200,
  },
  coverNumber: {
    flexDirection: "row",
    width: "100%",
    height: "12.5%",
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  coverNumberPin: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "40.2%",
    /*     height:113, */
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    width: 18,
    marginHorizontal: "2%",
    height: 18,
    backgroundColor: "#67c7d3",
    borderRadius: 20,
  },
  number1: {
    width: 18,
    marginHorizontal: "2%",
    height: 18,
    backgroundColor: "white",
    borderRadius: 20,
  },
  numberPin: {
    width: "26%",
    marginHorizontal: "2%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 200,
  },
  numberPin1: {
    width: 110,
    marginHorizontal: "2%",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    borderRadius: 200,
  },
  lockIcon: {
    width: "100%",
    height: "17.9%",
    paddingTop: "3%",
    alignItems: "center",
  },
  cancelBtn: {
    width: "22%",
    height: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
});
