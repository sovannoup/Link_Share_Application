import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import IconF from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconE from "react-native-vector-icons/EvilIcons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-web-swiper";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { scrollInterpolator, animatedStyles } from "./../Utils/animations";
import LinearGradient from "react-native-linear-gradient";

const width = Dimensions.get("window").width;
const height = width * 1.28;

const images = [
  <View style={{ width: "100%" }}>
    <Text>hello</Text>
  </View>,
  <Text>gi</Text>,
];

export default class Home extends Component {
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
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.contentBox}> */}
        <View style={styles.sl}>
          <ScrollView
            onScroll={this.change}
            pagingEnabled
            horizontal
            style={{ width, height }}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() =>
                  NavigationService.navigate(NAV_TYPES.HOME_BUY_NOW)
                }
              >
                <View style={styles.boxShadow}>
                  <View style={styles.imgSlide}>
                    <Text>{item}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
        <View style={styles.pag}>
          {images.map((i, k) => (
            <IconF
              key={k}
              name="minus"
              style={
                k == this.state.active ? styles.activePaging : styles.paging
              }
            />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imgSlide: {
    width: "100%",
    height: "15%",
    resizeMode: "cover",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  pag: {
    flexDirection: "row",
    top: "10.5%",
    position: "absolute",
    /*  marginTop:'114%' */
  },
  boxShadow: {
    width,
    height: "104%",
    alignItems: "center",
    backgroundColor: "red",
    padding: "3%",
  },
  sl: {
    width: "100%",
    height: "70%",
    position: "absolute",
    top: "16%",
  },
  paging: {
    fontSize: 22,

    color: "#e0dede",
  },
  activePaging: {
    fontSize: 22,
    color: "#2872ac",
  },
  container: {
    flex: 1,
  },
  /*   myBody:{
      width:'100%',
      height:'20%',
      alignItems:'center',
      justifyContent: 'center',
    }, */
});
