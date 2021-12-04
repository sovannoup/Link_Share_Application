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
import IconA from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import IconF from "react-native-vector-icons/Feather";
import IconFo from "react-native-vector-icons/Foundation";
import IconF5 from "react-native-vector-icons/FontAwesome5";
/* import IconM from 'react-native-vector-icons/MaterialIcons'; */

export default class ResetPIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ["", "", "", ""],
    };
  }
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
      /* <View style={{flex:1, backgroundColor:'#07cdce',}}>
               <View style={{flex:.7,flexDirection:'row',backgroundColor:'#07cdce',alignItems: 'center'}}>
<IconA name="arrowleft" style={{fontSize:25,color:'white',marginLeft:'3%',marginTop:'2%'}}/>
<View><Text style={styles.headerText}>Reset PIN</Text></View>
    </View>
    <View style={styles.content}>

    <View style={styles.lockIcon}>
<IconFo name="lock" style={{color:'#03ccc7',fontSize:45}}/>

<View style={{width:90,height:30,backgroundColor:'#03ccc7',borderRadius:50,flexDirection:'row',marginTop:'1%',justifyContent: 'center',alignItems: 'center',paddingVertical:2,marginBottom:10,elevation: 5,}}>
  <View><IconF5 name="star-of-life" style={{fontSize:15,color:'white',marginHorizontal:2}}/></View>
  <View><IconF5 name="star-of-life" style={{fontSize:15,color:'white',marginHorizontal:2}}/></View>
  <View><IconF5 name="star-of-life" style={{fontSize:15,color:'white',marginHorizontal:2}}/></View>
  <View><IconF5 name="star-of-life" style={{fontSize:15,color:'white',marginHorizontal:2}}/></View>
  
 
</View>
<View style={{alignItems: 'center',justifyContent: 'center',paddingHorizontal:20}}>
        <Text style={{bottom:0,color:'black',fontSize:18,fontWeight:'bold'}}>Set Up 4-digit PIN</Text>
        <Text style={{bottom:0,color:'black',fontSize:16,textAlign:'center',marginTop:5}}>This will be required during daily access to the app and managing setting or transactions.</Text>
        </View>

      </View>

    </View>
    <View style={styles.coverNumber}>
        {this.state.passcode.map((p, index)=>{
          let style = p !=''? styles.number1 :styles.number;
          return   <View style={style} key={index}></View>
        })}
      </View>

       <View style={styles.coverNumberPin}>
     
        {number.map((num, index)=>{
          return(
            <View style={styles.numberPin} key={index} >
            <TouchableRipple style={styles.numberPin1}  borderless={true} rippleColor="rgba(225, 225, 2251)" key={num.id}
            onPress={()=>this._onPressNumber(num.id)}><Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>{num.id}</Text></TouchableRipple>
            </View>
          );
        })}
     
        
      
    
        
      </View>


      <View style={{height:'16.5%',
      width:'33.33%',justifyContent:'center',alignItems:'center',position:'absolute',bottom:'-1%',left:'1%'}}>
<TouchableRipple   borderless={true} rippleColor="rgba(225, 225, 2251)" style={styles.c} onPress={()=>this._onPressC()}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#08d4d6'}}>C</Text>
        </TouchableRipple> 
        </View>
        <View style={{height:'16.5%',
      width:'33.33%',justifyContent:'center',alignItems:'center',position:'absolute',bottom:'-1%',right:'5%'}}>
<TouchableRipple   borderless={true} rippleColor="rgba(225, 225, 2251)" style={styles.c} onPress={()=>this._onPressCancel()}>
          <IconF name="delete" style={{fontSize:20,fontWeight:'bold',color:'#08d4d6'}}/>
        </TouchableRipple>
        </View> 


            </View> */
      <View Style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#07cdce" }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#07cdce",
              alignItems: "center",
              height: "6%",
            }}
          >
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
              <Text style={styles.headerText}>Reset PIN</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.lockIcon}>
              <IconFo name="lock" style={{ color: "#03ccc7", fontSize: 45 }} />

              <View
                style={{
                  width: 90,
                  height: 30,
                  backgroundColor: "#03ccc7",
                  borderRadius: 50,
                  flexDirection: "row",
                  marginTop: "1%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 2,
                  elevation: 9,
                }}
              >
                <View>
                  <IconF5
                    name="star-of-life"
                    style={{
                      fontSize: 15,
                      color: "white",
                      marginHorizontal: 2,
                    }}
                  />
                </View>
                <View>
                  <IconF5
                    name="star-of-life"
                    style={{
                      fontSize: 15,
                      color: "white",
                      marginHorizontal: 2,
                    }}
                  />
                </View>
                <View>
                  <IconF5
                    name="star-of-life"
                    style={{
                      fontSize: 15,
                      color: "white",
                      marginHorizontal: 2,
                    }}
                  />
                </View>
                <View>
                  <IconF5
                    name="star-of-life"
                    style={{
                      fontSize: 15,
                      color: "white",
                      marginHorizontal: 2,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    bottom: 0,
                    color: "black",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Set Up 4-digit PIN
                </Text>
                <Text style={{ bottom: 0, color: "black", fontSize: 17 }}>
                  THis will be required during daily access to the app and
                  managing setting or transactions.
                </Text>
              </View>
            </View>
            {/*   <IconM name="home"/> */}

            <View style={styles.coverNumber}>
              {this.state.passcode.map((p, index) => {
                let style = p != "" ? styles.number1 : styles.number;
                return <View style={style} key={index}></View>;
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
                        key={num.id}
                        onPress={() => this._onPressNumber(num.id)}
                        /*  onPress={()=>this._onPressCancel(number[9].id)} */
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#08d4d6",
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
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "94%",
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
  /*   delete:{

      position: 'absolute',
      right:'6%',
      bottom:'-0.5%',
      width:110,
      justifyContent:'center',
      alignItems: 'center',
      height:110,
      borderRadius:200,
     
    }, */
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
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    width: 18,
    marginHorizontal: "2%",
    height: 18,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#03ccc7",
  },
  number1: {
    width: 18,
    marginHorizontal: "2%",
    height: 18,
    backgroundColor: "#03ccc7",
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
    width: 125,
    marginHorizontal: "2%",
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    borderRadius: 200,
  },
  lockIcon: {
    width: "100%",
    height: "23.9%",
    paddingTop: "3%",
    alignItems: "center",
  },
  cancelBtn: {
    width: "22%",
    height: "6%",
    alignItems: "center",
    justifyContent: "center",
  },

  /* new */

  content: {
    flex: 5,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "10%",
    fontWeight: "bold",
  },
});
