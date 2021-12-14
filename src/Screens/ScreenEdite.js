/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableOpacityBase,
  Image,
  Alert,
} from "react-native";
import NavigationService from "../Service/navigationService";
import { NAV_TYPES } from "../Navigation/navTypes";
import { ScrollView } from "react-native-gesture-handler";
import Bought from "../component/Bought";
import Edited from "../component/Edited";
import LinearGradient from "react-native-linear-gradient";
import { TouchableRipple } from "react-native-paper";
import IconI from "react-native-vector-icons/Ionicons";
var product = [];
export default class ScreenEdite extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      stateName: "Bought",
      index: 0,
      number: 0,
      products: [],
      Holder: "",
    };
  }
  componentDidMount() {
    this.getUserStorage();

    // this.props.g_bought(1);
    console.log("###############", this.props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("/////_+_+__+_+_+_+_+_+_+_+_+_+", nextProps);
    const { home } = this.props;

    if (nextProps.home.bought && nextProps.home.bought != home.bought) {
      console.log("reutle-------------------", nextProps.home);
      if (nextProps.home.bought.message === "success") {
        // this.setState({Lg: nextProps.home.bought.results})
        console.log(
          "idididididid<><>><><><>><><><>",
          nextProps.home.bought.results
        );
      }
    }
  }

  getUserStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@DataLogin");
      if (value !== null) {
        // We have data!!
        console.log("value", JSON.parse(value));
        if (value) {
          this.setState({
            userStorage: JSON.parse(value).data,
          });
        }
      } else {
        console.log("value", false);
        return;
      }
    } catch (error) {
      // Error retrieving data
      console.log("error", error);
    }
  };

  doItemsToArray() {
    this.setState({ products: product });
    //Adding Items To Array.
    //product.push( this.state.Holder);
    product.splice(product.length - 1);
    console.log("3333333", this.state.products);
    // Showing the complete Array on Screen Using Alert.
  }

  AddItemsToArray() {
    this.setState({ products: product }),
      //Adding Items To Array.
      product.push(this.state.Holder);
    //product.splice(product.length-1);
    console.log("3333333", this.state.products);
    // Showing the complete Array on Screen Using Alert.
  }

  _CallGet(index, title) {
    if (this.state.index === index) {
      return;
    }
    this.setState({
      index: index,
      stateName: title,
    });
  }

  _loopTab(data) {
    var rs = [];
    if (data.length > 0) {
      data.map((one, i) => {
        rs.push(
          <TouchableOpacity
            key={i}
            style={
              this.state.index === i ? styles.headerBtnActive : styles.headerBtn
            }
            onPress={() => {
              this._CallGet(i, one["title"]);
            }}
          >
            <Text style={styles.headerText}>{one["title"]}</Text>
          </TouchableOpacity>
        );
      });
    }
    return rs;
  }
  render() {
    const TAB = [
      { index: 1, title: "Bought" },
      { index: 2, title: "Edited" },
    ];
    var { press, proName, proPrice } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.OrderBtn}>{this._loopTab(TAB)}</View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {/*  <View style={styles.header}>
                    
                </View> */}

          <View style={styles.products}>
            {this.state.stateName === "Bought" &&
              product.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.productBox}
                    onPress={press}
                    key={index}
                  >
                    <Image
                      resizeMode={"cover"}
                      style={styles.imgStyle}
                      source={require("../Assets/img.jpg")}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <Text style={{ fontSize: 15 }}>{proName}</Text>
                      <Text
                        style={{
                          fontSize: 15,
                          marginVertical: "8%",
                          marginBottom: "20%",
                        }}
                      >
                        {proPrice}
                      </Text>
                    </View>
                    {/*  <TouchableOpacity onPress={()=>this.doItemsToArray()} style={{position:'absolute',right:10,backgroundColor:'red'}}><IconI name="remove-outline" size={25}></IconI></TouchableOpacity> */}
                  </TouchableOpacity>
                );
              })}

            {this.state.stateName === "Edited" &&
              product.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.productBox}
                    onPress={press}
                    key={index}
                  >
                    <Image
                      resizeMode={"cover"}
                      style={styles.imgStyle}
                      source={require("../Assets/img.jpg")}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <Text style={{ fontSize: 15 }}>{proName}</Text>
                      <Text
                        style={{
                          fontSize: 15,
                          marginVertical: "8%",
                          marginBottom: "20%",
                        }}
                      >
                        {proPrice}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  products: {
    backgroundColor: "#E5E5E5",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 15,
  },
  header: {
    height: 70,
    justifyContent: "center",
  },
  OrderBtn: {
    width: "100%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    /*   justifyContent: 'space-between', */
    flexDirection: "row",
    height: 80,
    backgroundColor: "#E5E5E5",
  },
  headerBtn: {
    backgroundColor: "#114898",
    width: "27%",
    marginHorizontal: "3%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderRadius: 25,
  },
  headerBtnActive: {
    backgroundColor: "#6ce5ff",
    marginHorizontal: "3%",
    width: "27%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 15,
    color: "white",
  },
  productBox: {
    width: "95%",
    marginHorizontal: "2.5%",
    marginVertical: 0,
    flexDirection: "row",
    height: 120,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingTop: 20,
  },
  imgStyle: {
    height: "100%",
    width: "25%",
    borderRadius: 10,
  },
});
