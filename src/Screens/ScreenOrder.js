/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
/* import NavigationService from '../../Service/navigationService'; */
import { NAV_TYPES } from "../../Navigation/navTypes";
import { ScrollView } from "react-native-gesture-handler";
import AllProduct from "../component/AllProduct";
import OrderProduct from "../component/OrderProduct";
import Cart from "../component/Edited";

export default class ScreenOrder extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      stateName: "All",
      index: 0,
    };
  }
  _CallGet(index, title) {
    if (this.state.end && this.state.index === index) {
      return;
    }
    this.setState({
      titleLable: title,
      index: index,
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
  componentDidMount() {
    this.props.s_information();
    //console.log('home oder ><><><><><><><><>>>>>>>>>>>',this.props)
    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
    const { navigation } = this.props;
    var infoPage = navigation.getParam("id", false);
    this.setState({ templateId: infoPage });
    console.log(")()()()()()()()()()(", infoPage);
  }
  render() {
    const TAB = [
      { index: 1, title: "All" },
      { index: 2, title: "Order" },
      { index: 2, title: "Cancel" },
    ];
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View style={styles.OrderBtn}>{this._loopTab(TAB)}</View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {/*  <View style={styles.header}>
                    
                </View> */}

          <View style={styles.products}>
            {this.state.stateName === "All" && (
              <TouchableOpacity style={styles.productBox}>
                <Image
                  resizeMode={"cover"}
                  style={styles.imgStyle}
                  source={require("../Assets/img.jpg")}
                />
                <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}></Text>
                  <Text
                    style={{
                      fontSize: 15,
                      marginVertical: "8%",
                      marginBottom: "20%",
                    }}
                  ></Text>
                </View>
              </TouchableOpacity>
            )}

            {this.state.stateName === "Order" && (
              <TouchableOpacity style={styles.productBox}>
                <Image
                  resizeMode={"cover"}
                  style={styles.imgStyle}
                  source={require("../Assets/img.jpg")}
                />
                <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}></Text>
                  <Text
                    style={{
                      fontSize: 15,
                      marginVertical: "8%",
                      marginBottom: "20%",
                    }}
                  ></Text>
                </View>
              </TouchableOpacity>
            )}
            {this.state.stateName === "Cancel" && (
              <TouchableOpacity style={styles.productBox}>
                <Image
                  resizeMode={"cover"}
                  style={styles.imgStyle}
                  source={require("../Assets/img.jpg")}
                />
                <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}></Text>
                  <Text
                    style={{
                      fontSize: 15,
                      marginVertical: "8%",
                      marginBottom: "20%",
                    }}
                  ></Text>
                </View>
              </TouchableOpacity>
            )}
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
    justifyContent: "space-between",
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
