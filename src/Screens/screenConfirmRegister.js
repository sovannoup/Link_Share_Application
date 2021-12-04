import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  AsyncStorage,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import CodeInput from "react-native-confirmation-code-input";
import NavigationService from "../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";

export default class ConfirmRegister extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
      /*  code:['','','','','',''], */
      code: "",
      smsServer: "",
      codeText: "",
    };
  }
  /*   componentDidMount(){
      this.refs.pin1ref.focus();
    
      } */
  onInputCompleted = () => {
    /* this.setState({code:codeText}); */
    if (this.state.smsServer === this.state.code) {
      NavigationService.navigate(NAV_TYPES.CORE);
    } else {
      alert("PIN Incorect");

      /* this.setState({ codeText: '' }) */
    }
    console.log("smsServer", this.state.smsServer);
    console.log("code", this.state.code);
    // this.handleConfirmSMS(codeText)
    /* console.log(" 99999999" ,codeText) */
  };

  componentDidMount() {
    this.props.sms_comfirm();
    console.log("SMSMSMSMSMSMSMSMMSMS", this.props);
    AsyncStorage.getItem("@pushDeviceId").then((stores) => {
      this.setState({
        deviceToken: stores,
      });
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { language } = this.props;
    console.log("SM____++++++++++++++++++", language.smsCode);
    //this.setState({smsServer: nextProps.language.smsCode.results[0]})
    if (
      nextProps.language.smsCode &&
      nextProps.language.smsCode !== language.smsCode
    ) {
      //console.log('reutle',nextProps.user.result_sms.results[0].smsCode)
      if (nextProps.language.smsCode.message === "success") {
        this.setState({
          smsServer: nextProps.language.smsCode.results[0].smsCode,
        });
        // console.log('Hello', this.state.smsServer)
      }
    }
  }

  render() {
    console.log(this.state.code);
    console.log("la", this.state.code.length);
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    /* const code=[{pin1},{pin2},{pin3},{pin4},{pin5},{pin6}]; */
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
            {/*  
                    <View
                    style={{flexDirection:'row'}}
                    > */}

            {/*  <CodeInput
        ref="codeInputRef2"
      keyboardType="numeric"
      codeLength={6}
      codeInputStyle={{ borderWidth: 0,backgroundColor:'white', borderRadius:5.59,width:'10.5%',marginLeft:'1%',marginRight:'1%' }}
      activeColor='black'
      inactiveColor='white'
      autoFocus={true}
      ignoreCase={true}
      inputPosition='center'
      size={40}
      onFulfill={(isValid) => this}
      containerStyle={{ marginTop:' 3%',}}
     
    /> */}

            {/*    </View> */}

            <View style={{ flexDirection: "row" }}>
              <TextInput
                maxLength={1}
                ref={"pin1ref"}
                onChangeText={(pin1) => {
                  this.setState({
                    pin1: pin1,
                    code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                  });
                  /* console.log(this.state.code[0]) */
                  if (pin1 != "") {
                    this.refs.pin2ref.focus();
                  } else {
                    this.setState({
                      pin5: pin5,
                      code: pin2 + pin3 + pin4 + pin6,
                    });
                  }
                }}
                value={pin1}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                maxLength={1}
                ref={"pin2ref"}
                onChangeText={(pin2) => {
                  this.setState({
                    pin2: pin2,
                    code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                  });
                  if (pin2 != "") {
                    this.refs.pin3ref.focus();
                  } else {
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin3 + pin4 + pin6,
                    });
                  }
                }}
                value={pin2}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                maxLength={1}
                ref={"pin3ref"}
                onChangeText={(pin3) => {
                  this.setState({
                    pin3: pin3,
                    code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                  });
                  if (pin3 != "") {
                    this.refs.pin4ref.focus();
                  } else {
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin2 + pin4 + pin6,
                    });
                  }
                }}
                value={pin3}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                maxLength={1}
                ref={"pin4ref"}
                onChangeText={(pin4) => {
                  this.setState({
                    pin4: pin4,
                    code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                  });
                  if (pin4 != "") {
                    this.refs.pin5ref.focus();
                  } else {
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin2 + pin3 + pin6,
                    });
                  }
                }}
                value={pin4}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                maxLength={1}
                ref={"pin5ref"}
                onChangeText={(pin5) => {
                  console.log("la5", this.state.code.length);
                  if (pin5 != "") {
                    this.refs.pin6ref.focus();
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                    });
                  } else {
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin2 + pin3 + pin4 + pin6,
                    });
                  }
                }}
                value={pin5}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                maxLength={1}
                ref={"pin6ref"}
                onChangeText={(pin6) => {
                  this.setState({
                    pin6: pin6,
                    code: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
                  });
                  if (pin6 == "") {
                    this.setState({
                      pin5: pin5,
                      code: pin1 + pin2 + pin3 + pin4 + pin5,
                    });
                  }
                }}
                value={pin6}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onInputCompleted(this.state.codeText);
              }}
              // onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
            >
              <Text style={styles.buttonText}>Complete Registration</Text>
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
