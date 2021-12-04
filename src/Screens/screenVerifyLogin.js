import React, { Component } from "react";
import {
  Keyboard,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { color } from "react-native-reanimated";
import { NAV_TYPES } from "./../Navigation/navTypes";
import CodeInput from "react-native-confirmation-code-input";
import NavigationService from "./../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";
export default class VerifyLogin extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
    };
  }
  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    return (
      <SafeAreaView style={(styles.body, { flex: 1 })}>
        <LinearGradient
          colors={["#2477B2", "#1758A1", "#104797"]}
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <View style={styles.headerLogo}>
            <Image
              style={styles.logo}
              source={require("./../Assets/Images/Logo-2.png")}
            />
          </View>
          <View style={styles.blockTop}>
            <Text style={{ color: "#fff", fontSize: 18, marginBottom: "5%" }}>
              SMS Verify Code
            </Text>

            <View style={{ flexDirection: "row" }}>
              <CodeInput
                keyboardType="numeric"
                codeLength={6}
                codeInputStyle={{
                  borderWidth: 0,
                  backgroundColor: "white",
                  borderRadius: 5.59,
                  width: "10.5%",
                  marginLeft: "1%",
                  marginRight: "1%",
                  fontSize: 18,
                }}
                activeColor="black"
                inactiveColor="white"
                autoFocus={false}
                ignoreCase={false}
                compareWithCode="111111"
                inputPosition="center"
                size={40}
                onFulfill={(isValid) => alert(isValid)}
                containerStyle={{ marginTop: " 3%" }}
              />
            </View>

            {/* <View
                    style={{flexDirection:'row'}}
                    >
                      <TextInput
                      maxLength={1}
                      autoFocus={true}
                      ref={"pin1ref"}
                      onChangeText={(pin1)=>{
                        this.setState({pin1:pin1})
                        if(pin1 !=""){
                          this.refs.pin2ref.focus()
                        }
                      }}
                      value={pin1}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                         maxLength={1}
                        ref={"pin2ref"}
                        onChangeText={(pin2)=>{
                          this.setState({pin2:pin2})
                          if(pin2 !=""){
                            this.refs.pin3ref.focus()
                          }
                        }}
                        value={pin2}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                         maxLength={1}
                        ref={"pin3ref"}
                        onChangeText={(pin3)=>{
                          this.setState({pin3:pin3})
                          if(pin3 !=""){
                            this.refs.pin4ref.focus()
                          }
                        }}
                        value={pin3}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                         maxLength={1}
                        ref={"pin4ref"}
                        onChangeText={(pin4)=>{
                          this.setState({pin4:pin4})
                          if(pin4 !=""){
                            this.refs.pin5ref.focus()
                          }
                        }}
                        value={pin4}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                         maxLength={1}
                        ref={"pin5ref"}
                        onChangeText={(pin5)=>{
                          this.setState({pin5:pin5})
                          if(pin5 !=""){
                            this.refs.pin6ref.focus()
                          }
                        }}
                        value={pin5}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                        <TextInput
                           maxLength={1}
                        ref={"pin6ref"}
                        onChangeText={(pin6)=>{
                          this.setState({pin6:pin6})
                        }}
                        value={pin6}
                          style={styles.input}
                          keyboardType="numeric"
                      />
                    </View> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  code: {},
  container: {
    flex: 1,
  },
  blockTop: {
    height: 155,
    width: "100%",
    marginTop: "10%",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: "5%",
    // resizeMode: 'contain'
  },
  headerLogo: {
    marginTop: "20%",
    position: "relative",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    backgroundColor: "#fff",
    width: "73%",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "7%",
  },
  buttonText: {
    textAlign: "center",
    color: "#4a7bb5",
    fontSize: 18,
  },
  input: {
    height: "90%",
    // backgroundColor:'red',
    width: "10%",
    borderWidth: 1,
    borderColor: "#d9e3f9",
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 0,
    marginTop: 15,
    textAlign: "center",
    backgroundColor: "#fff",
    marginHorizontal: "1.3%",
    color: "#000000",
    fontSize: 20,
  },
});
