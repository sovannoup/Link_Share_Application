/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
/* import NavigationService from '../../Service/navigationService'; */
import { ScrollView } from "react-native-gesture-handler";
import AllProduct from "../component/AllProduct";
import OrderProduct from "../component/OrderProduct";
import Cart from "../component/Edited";
import { IMG_URL } from "../Modules/app/config";
import NavigationService from "../Service/navigationService";
import { NAV_TYPES } from "../Navigation/navTypes";

export default class ScreenOrder extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      stateName: "All",
      index: 0,
      allOrderedProduct: [],
      orderingProduct: [],
      cancelProduct: [],
    };
  }
  _CallGet(index, title) {
    if (this.state.end && this.state.index === index) {
      return;
    }
    this.setState({
      stateName: title,
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
    this.props.f_get_product();
    // const { navigation } = this.props;
    // var infoPage = navigation.getParam("id", false);
    // this.setState({ templateId: infoPage });
  }
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { home } = this.props;

    if (
      nextProps.home.r_orderPro &&
      nextProps.home.r_orderPro != home.r_orderPro
    ) {
      if (nextProps.home.r_orderPro.message === "success") {
        var all = [];
        var ordering = [];
        var cancel = [];
        var arrProduct = nextProps.home.r_orderPro.data;
        for (let index = 0; index < arrProduct.length; index++) {
          const element = nextProps.home.r_orderPro.data[index];
          all.push({
            ...element,
            url: IMG_URL + element.temImage,
          });
          if (element.orderApproved === 1) {
            ordering.push({
              ...element,
              url: IMG_URL + element.temImage,
            });
          } else {
            cancel.push({
              ...element,
              url: IMG_URL + element.temImage,
            });
          }
        }
        this.setState({
          allOrderedProduct: all,
          orderingProduct: ordering,
          cancelProduct: cancel,
        });
      }
    }
  };
  render() {
    const TAB = [
      { index: 1, title: "All" },
      { index: 2, title: "Order" },
      { index: 2, title: "Cancel" },
    ];
    const { allOrderedProduct, orderingProduct, cancelProduct } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View style={styles.OrderBtn}>{this._loopTab(TAB)}</View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <View style={styles.products}>
            {this.state.stateName === "All" &&
              allOrderedProduct.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.productBox}
                    onPress={() =>
                      NavigationService.navigate(NAV_TYPES.VIEW_ORDER, {
                        data: item,
                      })
                    }
                  >
                    <Image
                      resizeMode={"cover"}
                      style={styles.imgStyle}
                      source={require("../Assets/img.jpg")}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {item.proTitle}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          marginTop: 5,
                        }}
                      >
                        Price: {item.proPrice}$
                      </Text>
                      <View
                        style={{
                          width: "70%",
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            marginTop: 5,
                            textAlign: "left",
                          }}
                        >
                          Qty: {item.proQty}$
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                        >
                          Total: {item.proPrice * item.proQty}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}

            {this.state.stateName === "Order" &&
              orderingProduct.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.productBox}>
                    <Image
                      resizeMode={"cover"}
                      style={styles.imgStyle}
                      source={require("../Assets/img.jpg")}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {item.proTitle}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          marginTop: 5,
                        }}
                      >
                        Price: {item.proPrice}$
                      </Text>
                      <View
                        style={{
                          width: "70%",
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            marginTop: 5,
                          }}
                        >
                          Qty: {item.proQty}$
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            marginRight: 10,
                          }}
                        >
                          Total: {item.proPrice * item.proQty}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            {this.state.stateName === "Cancel" &&
              cancelProduct.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.productBox}>
                    <Image
                      resizeMode={"cover"}
                      style={styles.imgStyle}
                      source={require("../Assets/img.jpg")}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {item.proTitle}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          marginTop: 5,
                        }}
                      >
                        Price: {item.proPrice}$
                      </Text>
                      <View
                        style={{
                          width: "70%",
                          justifyContent: "space-between",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            marginTop: 5,
                          }}
                        >
                          Qty: {item.proQty}$
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          Total: {item.proPrice * item.proQty}
                        </Text>
                      </View>
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
