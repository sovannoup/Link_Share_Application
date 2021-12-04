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

export default class EditeTemplate extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      imageOne: "",
      imageTwo: "",
      imageThree: "",
      imageFour: "",
      imageFive: "",
      imageSix: "",
      image8: "",
      image9: "",
      image10: "",
      image11: "",
      image12: "",
      image13: "",
      image14: "",
      image15: "",
      image16: "",
      image17: "",
      image18: "",
      imageS1: "",
      imageS2: "",
      imageS3: "",
    };
  }
  selectImages(key) {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      const _data = "data:image/png;base64," + image.data;
      this.setState({
        [key]: _data,
      });
    });
  }

  render() {
    const {
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix,
      imageSeven,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      imageS1,
      imageS2,
      imageS3,
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
              onPress={() => this.selectImages("imageTwo")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    imageTwo
                      ? { uri: imageTwo }
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
                  onPress={() => this.selectImages("imageS1")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        imageS1
                          ? { uri: imageS1 }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.EditeBox}
                  onPress={() => this.selectImages("imageS2")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        imageS2
                          ? { uri: imageS2 }
                          : require("./../Assets/Images/blank.jpg")
                      }
                    />
                  }
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.EditeBox}
                  onPress={() => this.selectImages("imageS3")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        imageS3
                          ? { uri: imageS3 }
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
                  />
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 16 }}>Discount price </Text>
                  <TextInput
                    style={styles.title}
                    placeholder="Text"
                    placeholderTextColor="gray"
                  />
                </View>
                <View style={styles.input}>
                  <Text style={{ fontSize: 16 }}>Discount % </Text>
                  <TextInput
                    style={styles.title}
                    placeholder="Text"
                    placeholderTextColor="gray"
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
                  style={{
                    borderWidth: 1,
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
                  style={{
                    borderWidth: 1,
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
              onPress={() => this.selectImages("imageThree")}
              style={styles.img}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    imageThree
                      ? { uri: imageThree }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            <View style={styles.subImg}>
              <TouchableOpacity
                onPress={() => this.selectImages("imageFour")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      imageFour
                        ? { uri: imageFour }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("imageFive")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      imageFive
                        ? { uri: imageFive }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("imageSix")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      imageSix
                        ? { uri: imageSix }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("imageSeven")}
                style={styles.subImg1}
              >
                {
                  <Image
                    style={styles.logo}
                    source={
                      imageSeven
                        ? { uri: imageSeven }
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
                  style={{ padding: 0 }}
                />
              </View>
            </View>
            {/* pic1 */}
            <View style={styles.coverPic}>
              <View style={styles.coverPicText}>
                <TouchableOpacity
                  style={styles.pic}
                  onPress={() => this.selectImages("image8")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        image8
                          ? { uri: image8 }
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
                    style={{
                      borderWidth: 1,
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
                  onPress={() => this.selectImages("image9")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        image9
                          ? { uri: image9 }
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
                    style={{
                      borderWidth: 1,
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
                  onPress={() => this.selectImages("image10")}
                >
                  {
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={
                        image10
                          ? { uri: image10 }
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
                    style={{
                      borderWidth: 1,
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
              onPress={() => this.selectImages("image11")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    image11
                      ? { uri: image11 }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            {/* contentpic 2 */}
            <TouchableOpacity
              style={{ width: "100%", height: 350, padding: 10 }}
              onPress={() => this.selectImages("image12")}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    image12
                      ? { uri: image12 }
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
                onPress={() => this.selectImages("image13")}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      image13
                        ? { uri: image13 }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("image14")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      image14
                        ? { uri: image14 }
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
                onPress={() => this.selectImages("image15")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      image15
                        ? { uri: image15 }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectImages("image16")}
                style={styles.RightPic}
              >
                {
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={
                      image16
                        ? { uri: image16 }
                        : require("./../Assets/Images/blank.jpg")
                    }
                  />
                }
              </TouchableOpacity>
            </View>
            {/*  */}
            <TouchableOpacity
              onPress={() => this.selectImages("image17")}
              style={{ width: "100%", height: 350, padding: 10 }}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    image17
                      ? { uri: image17 }
                      : require("./../Assets/Images/blank.jpg")
                  }
                />
              }
            </TouchableOpacity>
            {/*  */}

            <TouchableOpacity
              onPress={() => this.selectImages("image18")}
              style={{ width: "100%", height: 350, padding: 10 }}
            >
              {
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={
                    image18
                      ? { uri: image18 }
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
          onPress={() => NavigationService.navigate(NAV_TYPES.SAVE)}
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
    marginBottom: 5,
  },
  shopName: {
    width: "97%",
    height: 55,
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
    width: "95%",
    paddingHorizontal: 20,
    height: 38,
    justifyContent: "center",
  },
  productDetail1: {
    borderColor: "gray",
    borderWidth: 1,
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
