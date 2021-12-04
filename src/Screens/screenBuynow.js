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
  Dimensions,
} from "react-native";
import { NAV_TYPES } from "../Navigation/navTypes";
import NavigationService from "../Service/navigationService";
import { WebView } from "react-native-webview";
import LinearGradient from "react-native-linear-gradient";
import { IMG_DETIAL_URL } from "../Modules/app/config";

const win = Dimensions.get("window");
export default class Buynow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      slideImg: [],
      active: 0,
      detialTemplate: [],
      templateIndex: "",
      templateId: "",
      Img: "",
      imgDetial: "",
      active: 0,
      ID: "",
    };
  }
  componentDidMount() {
    this.props.g_detialImg();
    //console.log('-=-=-=-=-=-=-=-=-=',this.props)
    const { navigation } = this.props;
    var infoPage = navigation.getParam("id", false);
    var infoIndex = navigation.getParam("index", false);
    this.setState({ templateId: infoPage });
    this.setState({ templateIndex: infoIndex });
    //console.log('idididid+++++++++++idiid',infoPage)
    //console.log('i+++++++++++idiid',infoIndex)

    // BackHandler.addEventListener('hardwareBackPress', this.disabledBackAndroid);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { home } = this.props;

    if (nextProps.home.imgDtial && nextProps.home.imgDtial !== home.imgDtial) {
      //console.log('^^^^^^^^^^^^^^^',nextProps.home.imgDtial)
      if (nextProps.home.imgDtial.message === "success") {
        var slideImg;
        /* this.setState({imgDetial:nextProps.home.imgDtial.results[this.state.templateIndex]}) */
        //console.log('slide+++++++++Img',nextProps.home.imgDtial.results[this.state.templateIndex]);
        this.setState({
          ID: nextProps.home.imgDtial.results[this.state.templateIndex].id,
        });
        const detialImg =
          IMG_DETIAL_URL +
          nextProps.home.imgDtial.results[this.state.templateIndex]
            .detialTemplate;
        //slideImg.push({
        /* ...element,
                url: IMG_URL+element.imagesimple */
        // urll:detialImg

        // })

        /* slideImg.push({
                  ...element,
                  url: IMG_URL+element.imagesimple
              
              }) */

        /*  detialImg.push({
                ...element,
                urlDetial: IMG_DETIAL_URL+element.detialTemplate
            }) */
        this.setState({ Img: detialImg });
        //console.log('ffff==++++++++++++++++++ffffff',detialImg)
      }
    }
  }
  /* if(nextProps.home.templatImg &&  nextProps.home.templatImg != home.templatImg){
         console.log('reutle',nextProps.language)
          if(nextProps.home.templatImg.message==="success"){
              this.setState({img:nextProps.home.templatImg})
              
              
          }
      
    } */

  handle() {
    var id = this.state.ID;
    NavigationService.navigate(NAV_TYPES.HOME_BUY, { id: id });
    //console.log('handle_____id____',id)
  }
  render() {
    const { Img } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#2477B2", "#1758A1", "#104797"]}
          style={styles.header}
        >
          <TouchableOpacity
            style={styles.btnicon}
            onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
          >
            <Image
              style={styles.icon}
              source={require("./../Assets/Icon/elements/a1.png")}
            />
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(NAV_TYPES.HOME_BUY)}
              onPress={() => this.handle()}
            >
              <Text style={styles.buttonText}>ORDER TEMPLATE NOW</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <ScrollView style={{}}>
          <Image
            style={{
              width: "100%",
              height: 7000,

              resizeMode: "contain",
              marginVertical: -1800,
              paddingTop: 5,
            }}
            /*  source={require('./../Assets/Images/ViewTheWholdTemplate.jpg')} */
            source={{ uri: Img }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 45,
    width: "70%",
    marginTop: "1%",
    backgroundColor: "#bf1e2e",
    justifyContent: "center",
    marginLeft: "13%",
    borderRadius: 50,
    paddingHorizontal: 10,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#195ca3",
    flexDirection: "row",
    /* justifyContent: 'center', */
    paddingTop: 15,
  },
  icon: {
    width: 27,
    height: 28,
    marginTop: 13,
    marginLeft: 20,
  },
  // btnicon:{
  //   width:50,
  //   height:50
  // }
});
