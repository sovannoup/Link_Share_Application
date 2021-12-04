import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import IconF from "react-native-vector-icons/FontAwesome";
import IconE from "react-native-vector-icons/Entypo";
import { TouchableRipple } from "react-native-paper";
/* import { TouchableOpacity } from 'react-native-gesture-handler'; */

const width = Dimensions.get("window").width;
const height = width * 1.28;

const images = [
  <View>
    <TouchableRipple
      style={{
        height: 80,
        borderBottomWidth: 0.6,
        borderColor: "gray",
        marginBottom: "0%",
        flexDirection: "row",
        alignItems: "center",
      }}
      borderless={true}
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(225,225, 2251)"
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 100,
            backgroundColor: "blue",
            marginLeft: "5%",
          }}
        ></View>
        <View>
          <Text style={{ marginLeft: 20 }}>mane by M.Deound</Text>
          <Text style={{ marginLeft: 20 }}>purchase 16344345456644</Text>
          <Text style={{ marginLeft: 20, color: "#a4a2a2" }}>
            day/mon/year 00:00:00 PM
          </Text>
        </View>
      </View>
    </TouchableRipple>

    <TouchableRipple
      style={{
        height: 80,
        borderBottomWidth: 0.6,
        borderColor: "gray",
        marginBottom: "0%",
        flexDirection: "row",
        alignItems: "center",
      }}
      borderless={true}
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(225,225, 2251)"
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 100,
            backgroundColor: "blue",
            marginLeft: "5%",
          }}
        ></View>
        <View>
          <Text style={{ marginLeft: 20 }}>mane by M.Deound</Text>
          <Text style={{ marginLeft: 20 }}>purchase 16344345456644</Text>
          <Text style={{ marginLeft: 20, color: "#a4a2a2" }}>
            day/mon/year 00:00:00 PM
          </Text>
        </View>
      </View>
    </TouchableRipple>
  </View>,
  <View>
    <TouchableRipple
      style={{
        height: 80,
        borderBottomWidth: 0.6,
        borderColor: "gray",
        marginBottom: "2%",
        flexDirection: "row",
        alignItems: "center",
      }}
      borderless={true}
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(225,225, 2251)"
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 100,
            backgroundColor: "blue",
            marginLeft: "5%",
          }}
        ></View>
        <View>
          <Text style={{ marginLeft: 20 }}>mane by M.Deound</Text>
          <Text style={{ marginLeft: 20 }}>purchase 16344345456644</Text>
          <Text style={{ marginLeft: 20, color: "#a4a2a2" }}>
            day/mon/year 00:00:00 PM
          </Text>
        </View>
      </View>
    </TouchableRipple>
  </View>,
];

export default class Notification extends Component {
  state = {
    active: 0,
  };

  constructor(props) {
    super(props);
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}> */}
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
            <Text style={styles.headerText}>Notification</Text>
          </View>
        </View>
        {/*  </View> */}

        <View style={styles.contentHeader}>
          <View style={styles.pag}>
            {images.map((i, k) => (
              <View
                key={k}
                style={
                  k == this.state.active ? styles.activePaging : styles.paging
                }
              ></View>
            ))}
          </View>
          <TouchableRipple
            onPress={() => {
              this.state.active;
            }}
            style={styles.contentHeaderLeft}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Transactions</Text>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              this.active;
            }}
            style={styles.contentHeaderRight}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Announcements</Text>
          </TouchableRipple>
        </View>

        <View style={styles.content}>
          <View style={styles.sl}>
            <ScrollView
              onScroll={this.change}
              pagingEnabled
              horizontal
              style={{ width }}
              showsHorizontalScrollIndicator={false}
            >
              {images.map((item, index) => (
                <View key={index}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.boxShadow}
                  >
                    <View style={styles.imgSlide}>
                      <View>{item}</View>
                    </View>
                  </ScrollView>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  contentHeaderLeft: {
    width: "50%",
    /* height:50, */
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
  },
  topBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 100,
  },
  contentHeaderRight: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    height: "8%",
    marginBottom: "5%",
    marginTop: 10,
  },
  content: {
    width: "100%",
    flex: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: "3%",
    fontWeight: "bold",
  },
  detailUserHeader: {
    width: "70%",
    paddingBottom: "3%",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  imgSlide: {
    width: "100%",
    /* backgroundColor:'yellow', */
    height: "100%",
    paddingBottom: 100,
    /*  resizeMode:'cover',
        backgroundColor:'#fafafa',
        borderRadius:5,
        marginBottom:'2%', */
  },
  pag: {
    flexDirection: "row",
    bottom: "-5%",
    left: "3%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    height: "6%",
  },
  boxShadow: {
    width,
    height: "100%",
    /*   alignItems:'center', */
    backgroundColor: "white",
    /*backgroundColor:'blue', */
    position: "relative",
    paddingTop: 0,
    paddingBottom: 200,
  },
  sl: {
    width: "100%",
    height: "86%",
    top: "2%",
  },
  paging: { fontSize: 22, width: "50%", height: "30%" },
  activePaging: {
    height: "70%",
    width: "50%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#07cdce",
  },
});
