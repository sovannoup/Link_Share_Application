import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import LinearGradient from "react-native-linear-gradient";

// Add

import IconAntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class screenHomeDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      Lg: "",
      name: "",
      phone: "",
      adress: "",
      templateId: "",
      true: "success",
    };
  }
  componentDidMount() {
    this.props.s_information();
    //console.log('home oder ><><><><><><><><>>>>>>>>>>>',this.props)
    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
    const { navigation } = this.props;
    var infoPage = navigation.getParam("id", false);
    this.setState({ templateId: infoPage });
    //console.log('.,.,.,..,.',infoPage)
  }
  /* 
  UNSAFE_componentWillReceiveProps(nextProps) {
 
  const {home}=this.props;
      
  if(nextProps.home.info &&  nextProps.home.info != home.info){
        if(nextProps.home.info.message==="ordered"){
            this.setState({Lg: nextProps.home.info.results})
      
            
            
        }
    
  }
  } */

  handleFullInfo() {
    const { name, phone, adress, templateId } = this.state;
    if (name != "" && phone != "" && adress != "") {
      //
      this.props.s_information({
        name: name,
        phone: phone,
        address: adress,
        templateID: templateId,
      });
      //NavigationService.navigate(NAV_TYPES.SETPIN)
      alert(this.state.true);
      //console.log('full name',this.props.s_information())
    } else {
      if (name.length == 0) alert("Input  Name...");

      if (phone.length == 0) alert("Input phoner number...");
      if (adress.length == 0) alert("Input adress...");
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F3FBFF" }}>
        <TouchableOpacity
          style={styles.btnicon}
          onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
        >
          <Image
            style={styles.icon}
            source={require("./../Assets/Icon/elements/a3.png")}
          />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <Text style={styles.textheader}>Template Order</Text>
          <View style={{ alignItems: "center" }}>
            <LinearGradient
              colors={["#2477B2", "#1758A1", "#104797"]}
              style={styles.blockFirst}
            >
              <View style={styles.rigth}>
                <View style={styles.form}>
                  <Text style={styles.label}>Name </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(name) => {
                      this.setState({ name: name });
                      //console.log(name)
                    }}
                  />
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Phone </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(phone) => {
                      this.setState({ phone: phone });
                      //console.log(phone)
                    }}
                  />
                </View>
                <View style={styles.form1}>
                  <Text style={styles.phone}>Address</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={styles.inputtxtArea}
                    onChangeText={(adress) => {
                      this.setState({ adress: adress });
                      //console.log(adress)
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.blockBottom}>
            <Text style={styles.textPrice}>Price: 25$</Text>
            <LinearGradient
              colors={["#2c71ac", "#114898"]}
              style={styles.button}
            >
              <TouchableOpacity
                style={styles.com}
                onPress={() => this.handleFullInfo()}
              >
                <Text style={styles.buttonText}>Comfirm to Buy</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  com: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  phone: {
    marginBottom: 80,
    fontSize: 16,
    marginRight: "2%",
    color: "#fff",
  },
  label: {
    fontSize: 16,
    marginRight: "2%",
    color: "#fff",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 14,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "12%",
    height: "14%",
  },
  form1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "12%",
    height: "50%",
  },
  container: {},
  blockTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blockFirst: {
    margin: 20,
    padding: "1%",
    borderRadius: 20,
    flexDirection: "row",
    width: "90%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  blockBottom: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    flexDirection: "row",
    position: "absolute",
    bottom: "16%",
  },

  input: {
    fontSize: 20,
    height: "100%",
    width: "79%",
    paddingVertical: 0,
    paddingHorizontal: 20,
    marginLeft: "1.5%",
    backgroundColor: "white",
    /*  paddingHorizontal:'1%', */
  },

  inputtxtArea: {
    fontSize: 20,
    height: "100%",
    width: "79%",
    textAlignVertical: "top",
    marginLeft: "1%",
    backgroundColor: "white",
    paddingHorizontal: 25,
  },

  button: {
    height: 50,
    backgroundColor: "#195ca3",
    borderRadius: 30,
    width: "58%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  icon: {
    width: 35,
    height: 35,
  },

  btnicon: {
    marginTop: 20,
    marginLeft: 20,
  },

  textheader: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#14509C",
    marginTop: "10%",
  },

  textPrice: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#14509C",
  },
});
