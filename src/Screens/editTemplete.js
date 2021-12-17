import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ImagePickerIOS,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";
import ImagePicker from "react-native-image-crop-picker";
/* import Slideshow from 'react-native-timed-slideshow'; */
import Swiper from "react-native-web-swiper";
import moment from "moment";

export default class EditeTemplate extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      id: "",
      title: "",
      logoimage: "",
      subtitle: "",
      shopName: "",
      messangerLink: "",
      telegramLink: "",
      address: "",
      phonenumber: "",
      email: "",

      proDetail1: "",
      proDetail2: "",
      proDetail3: "",

      imgTxt6: "",
      imgTxt7: "",
      imgTxt8: "",

      oriPrice: "",
      disPrice: "",
      percent_dis: "",

      slider1: "",
      slider2: "",
      slider3: "",

      firstImg: "",
      secImg: "",
      thirdImg: "",
      fourthImg: "",
      fifthImg: "",

      sixthImg: "",
      sevenImg: "",
      eightImg: "",

      nineImg: "",
      tenImg: "",

      elevenImg: "",
      twelveImg: "",
      thirdteenImg: "",
      fourteenImg: "",

      fifteenImg: "",
      sixteenImg: "",
    };
  }
  saveAndPreview = () => {
    const {
      title,
      logoimage,
      subtitle,
      shopName,
      messangerLink,
      telegramLink,
      address,
      phonenumber,
      email,

      slider1,
      slider2,
      slider3,

      proDetail1,
      proDetail2,
      proDetail3,

      imgTxt6,
      imgTxt7,
      imgTxt8,

      oriPrice,
      disPrice,
      percent_dis,

      firstImg,
      secImg,
      thirdImg,
      fourthImg,
      fifthImg,

      sixthImg,
      sevenImg,
      eightImg,

      nineImg,
      tenImg,

      elevenImg,
      twelveImg,
      thirdteenImg,
      fourteenImg,

      fifteenImg,
      sixteenImg,
    } = this.state;
    var data = {
      toProduct: {
        temId: 1,
        temImage: "images_data_Web Devs.jpeg",
        productLink: "https://stackoverflow.com/questions/",
        date: moment().format("YYYY/MM/DD-HH:mm:ss"),
        proId: 1,
      },
      toProductInfo: {
        logo: logoimage,
        title: title,
        subtitle: subtitle,
        messanger: messangerLink,
        telegram: telegramLink,
        address: address,
        phonenumber: phonenumber,
        email: email,
      },
      toSlideImg: [
        {
          slideImg: slider1,
          sliderOrder: 1,
        },
        {
          slideImg: slider2,
          sliderOrder: 2,
        },
        {
          slideImg: slider3,
          sliderOrder: 3,
        },
      ],
      toPrice: {
        oriPrice: oriPrice,
        disPrice: disPrice,
        disPercent: percent_dis,
      },
      toDetailTxt: [
        {
          text: proDetail1,
          textOrder: 1,
        },
        {
          text: proDetail2,
          textOrder: 2,
        },
        {
          text: proDetail3,
          textOrder: 3,
        },
      ],
      toImgTxt: [
        {
          image: sixthImg,
          text: imgTxt6,
        },
        {
          image: sevenImg,
          text: imgTxt7,
        },
        {
          image: eightImg,
          text: imgTxt8,
        },
      ],
      toProductImg: [
        {
          image: firstImg,
          id: 1,
        },
        {
          image: secImg,
          id: 2,
        },
        {
          image: thirdImg,
          id: 3,
        },
        {
          image: fourthImg,
          id: 4,
        },
        {
          image: fifthImg,
          id: 5,
        },
        {
          image: nineImg,
          id: 9,
        },
        {
          image: tenImg,
          id: 10,
        },
        {
          image: elevenImg,
          id: 11,
        },
        {
          image: twelveImg,
          id: 12,
        },
        {
          image: thirdteenImg,
          id: 13,
        },
        {
          image: fifteenImg,
          id: 14,
        },
        {
          image: fifteenImg,
          id: 15,
        },
        {
          image: sixteenImg,
          id: 16,
        },
      ],
    };
    console.log("done");
    this.props.f_saveAndPreview(data);
    // NavigationService.navigate(NAV_TYPES.SAVE)
  };
  txtChange = (key, value) => {
    this.setState({ [key]: value });
  };

  selectImages(key) {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      // console.log(image);
      const _data = "data:image/png;base64," + image.data;
      this.setState({
        [key]: _data,
      });
    });
  }

  render() {
    const {
      title,
      logoimage,
      subtitle,
      shopName,
      messangerLink,
      telegramLink,
      address,
      phonenumber,
      email,

      slider1,
      slider2,
      slider3,

      proDetail1,
      proDetail2,
      proDetail3,

      imgTxt6,
      imgTxt7,
      imgTxt8,

      oriPrice,
      disPrice,
      percent_dis,

      firstImg,
      secImg,
      thirdImg,
      fourthImg,
      fifthImg,

      sixthImg,
      sevenImg,
      eightImg,

      nineImg,
      tenImg,

      elevenImg,
      twelveImg,
      thirdteenImg,
      fourteenImg,

      fifteenImg,
      sixteenImg,
    } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
        <View style={styles.coverHomeIcon}>
          <TouchableOpacity
            stlye={styles.homeIcon}
            onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}
          >
            <View style={styles.Icon}>
              <IconF name="home" style={{ fontSize: 20, color: "white" }} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
          <View style={styles.Box}>
            <TouchableOpacity
              style={styles.proBox}
              onPress={() => this.selectImages("logoimage")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    logoimage
                      ? { uri: logoimage }
                      : require("./../Assets/Images/loo.jpg")
                  }
                />
              }
            </TouchableOpacity>
            <View style={{ width: "100%", height: 300 }}>
              <Swiper
                style={styles.wrapper}
                controlsProps={{
                  prevPos: false,
                  nextPos: false,
                }}
                loop={true}
              >
                <TouchableOpacity
                  style={styles.EditeBox}
                  onPress={() => this.selectImages("slider1")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        slider1
                          ? { uri: slider1 }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.EditeBox}
                  onPress={() => this.selectImages("slider2")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        slider2
                          ? { uri: slider2 }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.EditeBox}
                  onPress={() => this.selectImages("slider3")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        slider3
                          ? { uri: slider3 }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
              </Swiper>
            </View>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={styles.coverTitle}>
              <TextInput
                style={styles.titlF}
                placeholder="Product Title"
                placeholderTextColor="gray"
                onChangeText={(text) => this.txtChange("title", text)}
                value={title}
              />
            </View>
            {/* form */}
            <View style={styles.coverForm}>
              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={{ fontSize: 16 }}>Original Price </Text>
                  <TextInput
                    style={styles.title}
                    placeholder="Text"
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("oriPrice", text)}
                    value={oriPrice}
                  />
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 16 }}>Discount price </Text>
                  <TextInput
                    style={styles.title}
                    placeholder="Text"
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("disPrice", text)}
                    value={disPrice}
                  />
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 16 }}>Discount % </Text>
                  <TextInput
                    style={styles.title}
                    placeholder="Text"
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("percent_dis", text)}
                    value={percent_dis}
                  />
                </View>
              </View>
            </View>
            {/* end form */}
            {/* product dedtail */}

            <View
              style={{
                width: "96%",
                borderBottomWidth: 1,
                borderColor: "#d6d6d6",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={styles.productDetail}>
                <TextInput
                  placeholderTextColor="gray"
                  placeholder="Product Detail"
                  style={{ padding: 0 }}
                  onChangeText={(text) => this.txtChange("proDetail1", text)}
                  value={proDetail1}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 150,
                justifyContent: "space-between",
              }}
            >
              <View style={styles.detailLeft}>
                <TextInput
                  multiline={true}
                  numberOfLines={10}
                  placeholderTextColor="gray"
                  placeholder="Detail"
                  onChangeText={(text) => this.txtChange("proDetail2", text)}
                  value={proDetail2}
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "gray",
                    height: "100%",
                    textAlignVertical: "top",
                    padding: 15,
                  }}
                />
              </View>
              <View style={styles.detailRight}>
                <TextInput
                  multiline={true}
                  numberOfLines={10}
                  placeholderTextColor="gray"
                  placeholder="Detail"
                  onChangeText={(text) => this.txtChange("proDetail3", text)}
                  value={proDetail3}
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "gray",
                    height: "100%",
                    textAlignVertical: "top",
                    padding: 15,
                  }}
                />
              </View>
            </View>
            {/* img */}
            <TouchableOpacity
              onPress={() => this.selectImages("firstImg")}
              style={styles.img}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    firstImg
                      ? { uri: firstImg }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            <View style={styles.subImg}>
              <TouchableOpacity
                onPress={() => this.selectImages("secImg")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      secImg
                        ? { uri: secImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("thirdImg")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      thirdImg
                        ? { uri: thirdImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("fourthImg")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      fourthImg
                        ? { uri: fourthImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("fifthImg")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      fifthImg
                        ? { uri: fifthImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
            </View>
            {/* img2 */}
            <View
              style={{
                width: "96%",
                borderBottomWidth: 1,
                borderColor: "#d6d6d6",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={styles.productDetail1}>
                <TextInput
                  placeholderTextColor="gray"
                  placeholderTextColor="gray"
                  placeholder="Sub Title Text"
                  onChangeText={(text) => this.txtChange("subtitle", text)}
                  value={subtitle}
                  style={{ padding: 0 }}
                />
              </View>
            </View>
            {/* pic1 */}
            <View style={styles.coverPic}>
              <View style={styles.coverPicText}>
                <TouchableOpacity
                  style={styles.pic}
                  onPress={() => this.selectImages("sixthImg")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        sixthImg
                          ? { uri: sixthImg }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
                <View style={styles.text}>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor="gray"
                    placeholder="Text"
                    onChangeText={(text) => this.txtChange("imgTxt6", text)}
                    value={imgTxt6}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "gray",
                      height: "100%",
                      textAlignVertical: "top",
                      padding: 10,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* pic2 */}
            <View style={styles.coverPic}>
              <View style={styles.coverPicText}>
                <TouchableOpacity
                  style={styles.pic}
                  onPress={() => this.selectImages("sevenImg")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        sevenImg
                          ? { uri: sevenImg }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
                <View style={styles.text}>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor="gray"
                    placeholder="Text"
                    onChangeText={(text) => this.txtChange("imgTxt7", text)}
                    value={imgTxt7}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "gray",
                      height: "100%",
                      textAlignVertical: "top",
                      padding: 10,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* pic3 */}
            <View style={styles.coverPic}>
              <View style={styles.coverPicText}>
                <TouchableOpacity
                  style={styles.pic}
                  onPress={() => this.selectImages("eightImg")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        eightImg
                          ? { uri: eightImg }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
                <View style={styles.text}>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor="gray"
                    placeholder="Text"
                    onChangeText={(text) => this.txtChange("imgTxt8", text)}
                    value={imgTxt8}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "gray",
                      height: "100%",
                      textAlignVertical: "top",
                      padding: 10,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* content 3 */}
            <View
              style={{
                width: "96%",
                borderBottomWidth: 1,
                borderColor: "#d6d6d6",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            {/* contentpic 1 */}
            <TouchableOpacity
              style={{ width: "100%", height: 350, padding: 10 }}
              onPress={() => this.selectImages("nineImg")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    nineImg
                      ? { uri: nineImg }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            {/* contentpic 2 */}
            <TouchableOpacity
              style={{ width: "100%", height: 350, padding: 10 }}
              onPress={() => this.selectImages("tenImg")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    tenImg
                      ? { uri: tenImg }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            {/* content 3 */}
            <View
              style={{
                width: "100%",
                height: 180,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.LeftPic}
                onPress={() => this.selectImages("elevenImg")}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      elevenImg
                        ? { uri: elevenImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("twelveImg")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      twelveImg
                        ? { uri: twelveImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                height: 180,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => this.selectImages("thirdteenImg")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      thirdteenImg
                        ? { uri: thirdteenImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("fourteenImg")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      fourteenImg
                        ? { uri: fourteenImg }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
            </View>
            {/*  */}
            <TouchableOpacity
              onPress={() => this.selectImages("fifteenImg")}
              style={{ width: "100%", height: 350, padding: 10 }}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    fifteenImg
                      ? { uri: fifteenImg }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            {/*  */}

            <TouchableOpacity
              onPress={() => this.selectImages("sixteenImg")}
              style={{ width: "100%", height: 350, padding: 10 }}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    sixteenImg
                      ? { uri: sixteenImg }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>

            <View
              style={{
                width: "96%",
                borderBottomWidth: 1,
                borderColor: "#d6d6d6",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            {/* shop name */}
            <TouchableOpacity style={styles.shopName}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="SHOP Name"
                onChangeText={(text) => this.txtChange("shopName", text)}
                value={shopName}
                style={{ fontSize: 20, padding: 0, textAlign: "center" }}
              />
            </TouchableOpacity>
            <View style={styles.formCus}>
              <View style={styles.formCover}>
                <View style={styles.formInput}>
                  <IconM
                    name="facebook-messenger"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                  <TextInput
                    placeholderTextColor="gray"
                    onChangeText={(text) =>
                      this.txtChange("messangerLink", text)
                    }
                    value={messangerLink}
                    style={{
                      width: "85%",
                      height: 33,
                      padding: 0,
                      backgroundColor: "#E5E5E5",
                      paddingHorizontal: 30,
                    }}
                    placeholder="Copy link messager"
                  />
                </View>
                <View style={styles.formInput}>
                  <IconM
                    name="map-marker-outline"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                  <TextInput
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("address", text)}
                    value={address}
                    style={{
                      width: "85%",
                      height: 33,
                      padding: 0,
                      backgroundColor: "#E5E5E5",
                      paddingHorizontal: 30,
                    }}
                    placeholder="Address"
                  />
                </View>
                <View style={styles.formInput}>
                  <IconM
                    name="phone-hangup-outline"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                  <TextInput
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("phonenumber", text)}
                    value={phonenumber}
                    style={{
                      width: "85%",
                      height: 33,
                      padding: 0,
                      backgroundColor: "#E5E5E5",
                      paddingHorizontal: 30,
                    }}
                    placeholder="Phone Number"
                  />
                </View>
                <View style={styles.formInput}>
                  <IconM
                    name="email-outline"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                  <TextInput
                    placeholderTextColor="gray"
                    onChangeText={(text) => this.txtChange("email", text)}
                    value={email}
                    style={{
                      width: "85%",
                      height: 33,
                      padding: 0,
                      backgroundColor: "#E5E5E5",
                      paddingHorizontal: 30,
                    }}
                    placeholder="Email"
                  />
                </View>
              </View>
            </View>

            <View style={{ height: 100 }}></View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.saveAndPreview()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 23 }}>
            Save and Preview
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  coverHomeIcon: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Icon: {
    backgroundColor: "#114898",
    padding: 5,
    borderRadius: 30,
    width: 35,
    height: 35,
    alignItems: "center",
  },
  homeIcon: {
    flex: 1,
  },
  formCus: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  formCover: {
    width: "96%",
  },
  formInput: {
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 35,
    backgroundColor: "#d2d3d5",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  shopName: {
    width: "97%",
    height: 55,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  LeftPic: {
    width: "48%",
    height: "100%",
  },
  RightPic: {
    width: "48%",
    height: "100%",
  },
  coverPic: {
    width: "100%",

    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  coverPicText: {
    width: "98%",

    height: "98%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pic: {
    width: "30%",
    height: "100%",
  },
  text: {
    width: "65%",
    height: "100%",
  },
  logo1: {
    width: "100%",
    height: 200,
  },
  logo: {
    width: 80,
    height: 80,
  },
  subImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  subImg1: {
    marginTop: 10,
  },
  img: {
    width: "100%",
    height: 370,

    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  Box: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  coverTitle: {
    marginTop: 10,
    position: "relative",
    width: "100%",
    height: 50,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  titlF: {
    borderWidth: 1,
    borderRadius: 5,
    width: "97%",
    height: "80%",
    padding: 0,
    paddingHorizontal: 20,
    fontSize: 18,
    borderColor: "gray",
  },
  titl: {
    borderWidth: 1,

    width: "70%",
    height: "100%",
    position: "absolute",
    borderColor: "white",

    right: 2,
  },
  proBox: {
    width: "100%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    marginBottom: 15,
  },
  EditeBox: {
    width: "98%",
    height: 300,
    backgroundColor: "#4d73be",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#195ca3",
    paddingVertical: 10,

    paddingHorizontal: 70,
    width: "100%",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  coverForm: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  form: {
    marginTop: 10,
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    height: 40,
    justifyContent: "center",
    marginBottom: 6,
  },
  title: {
    borderWidth: 1,
    borderRadius: 5,
    width: "65%",
    height: "90%",
    padding: 0,
    position: "absolute",
    borderColor: "white",
    paddingLeft: 20,
    right: 0,
    borderColor: "gray",
    borderWidth: 1,
  },
  productDetail: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "95%",
    paddingHorizontal: 20,
    height: 38,
    justifyContent: "center",
  },
  productDetail1: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: "95%",
    height: 38,
    justifyContent: "center",
    marginBottom: 10,
  },
  detailLeft: {
    width: "48%",
    height: "100%",

    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  detailRight: {
    width: "48%",
    height: "100%",

    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  /* slide */
  wrapper: {
    width: "100%",
    height: "100%",
  },
});
