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
import { IMG_URL, IMG_DETIAL_URL } from "../Modules/app/config";
import { CodeInputModule } from "angular-code-input";

const width = Dimensions.get("window").width;
const height = width * 1.28;
const widthI = Math.round(width * 0.8);

const images = [""];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      slideImg: [],
      active: 0,
    };
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
      console.log("aaaaaaà,", this.state.active);
    }
  };

  componentDidMount() {
    this.props.template_img();
    console.log("prop++++++++++++++", this.props);
    {
      this.state.slideImg.map((i, k) => (
        <IconF key={k} name="minus" style={k == this.state.active} />
      ));
    }

    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
  }
  handle(index) {
    var item = this.state.slideImg[index];
    NavigationService.navigate(NAV_TYPES.HOME_BUY, {
      id: item.id,
      index: index,
    });
    /* console.log('handle__title_______',{title:item.title})
      console.log('handle_____id____',{id:item.id})
      console.log('index_+-=-=-===-____',{index:index}) */
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { home } = this.props;

    if (
      nextProps.home.templatImg &&
      nextProps.home.templatImg !== home.templatImg
    ) {
      //console.log('te+++++plate_________________________-',nextProps.home.templatImg.results.length)
      if (nextProps.home.templatImg.results.length > 0) {
        var slideImg = [],
          detialImg = [];
        for (
          let index = 0;
          index < nextProps.home.templatImg.results.length;
          index++
        ) {
          //console.log('slide+++++++++Img',nextProps.home.templatImg.results[0]);
          const element = nextProps.home.templatImg.results[index];
          slideImg.push({
            ...element,
            url: IMG_URL + element.imagesimple,
          });

          /*             detialImg.push({
              ...element,
              urlDetial: IMG_DETIAL_URL+element.detialTemplate
          }) */
        }

        this.setState({ slideImg: slideImg });
        //console.log('url*&&&&&&&&&&&&&&&&',IMG_URL)
      }
    }
    /* if(nextProps.home.templatImg &&  nextProps.home.templatImg != home.templatImg){
       console.log('reutle',nextProps.language)
        if(nextProps.home.templatImg.message==="success"){
            this.setState({img:nextProps.home.templatImg})
            
            
        }
    
  } */
  }
  render() {
    const { slideImg } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={["#2c71ac", "#114898"]} style={styles.myBody}>
          <Image
            style={styles.logo}
            source={require("./../Assets/Images/Logo.png")}
          />
        </LinearGradient>

        {/* <View style={styles.contentBox}> */}
        <View style={styles.sl}>
          <ScrollView
            onScroll={this.change}
            pagingEnabled
            horizontal
            style={{ width, height }}
            showsHorizontalScrollIndicator={false}
          >
            {slideImg.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() =>
                  NavigationService.navigate(NAV_TYPES.HOME_BUY_NOW, {
                    id: item.id,
                    index: index,
                  })
                }
                // onPress={()=>console.log('url()()()()()()()()(',item.url)}

                /* onPress={()=>console.log('id+_+_+_+_+_+_+_+',{id:item.id})} */
              >
                <View style={styles.boxShadow}>
                  <Image
                    keys={index}
                    source={{ uri: item.url }}
                    style={styles.imgSlide}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
        <View style={styles.pag}>
          {slideImg.map((i, k) => (
            <IconF
              key={k}
              name="minus"
              style={
                k == this.state.active ? styles.activePaging : styles.paging
              }
            />
          ))}
        </View>

        <LinearGradient colors={["#1757A1", "#2272AF"]} style={styles.button}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
            onPress={() => this.handle(this.state.active)}
          >
            <Text style={styles.buttonText}>ORDER NOW{this.state.img}</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/*  </View>   */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imgSlide: {
    width: "80%",
    height: "95%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  pag: {
    flexDirection: "row",
    bottom: "10.5%",
    position: "absolute",
    /*  marginTop:'114%' */
  },
  boxShadow: {
    width,
    height: "104%",
    alignItems: "center",
  },
  sl: {
    width: "100%",
    height: "70%",
    position: "absolute",
    top: "16%",
  },
  paging: { fontSize: 22, marginHorizontal: 5, color: "#e0dede" },
  activePaging: {
    fontSize: 22,
    marginHorizontal: 5,
    color: "#2872ac",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  myBody: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "45%",
    height: "50%",
  },
  button: {
    height: "6%",
    width: "45%",
    justifyContent: "center",
    borderRadius: 100,
    bottom: "3%",
    position: "absolute",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Ephesis-Regular",
  },
});
