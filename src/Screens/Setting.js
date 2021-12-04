import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import IconF from "react-native-vector-icons/Feather";
import IconA from "react-native-vector-icons/AntDesign";
import IconM from "react-native-vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.header}
          colors={["#2477B2", "#1758A1", "#104797"]}
        >
          <Image
            style={styles.avatar}
            source={require("./../Assets/Images/computer-tech.png")}
          />
          <View>
            <Text style={styles.cover}>Use Name</Text>
            <Text style={styles.cov}>0885 564 674</Text>
          </View>
        </LinearGradient>
        <ScrollView style={{ flex: 1, paddingTop: 30 }}>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconF name="percent" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Discount</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconF name="bookmark" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Voucher</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconM name="delivery-dining" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconF name="dollar-sign" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconF name="menu" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Shop Info</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containers}>
            <View style={{ flex: 0.3 }}>
              <IconF name="image" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Template</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containersend}>
            <View style={{ flex: 0.3 }}>
              <IconM name="logout" style={styles.icon} />
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={styles.simpleText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    width: 350,
  },
  container: {
    flex: 1,
  },

  simpleText: {
    fontSize: 13,
  },
  header: {
    backgroundColor: "#4d73be",
    height: 150,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    /* marginBottom:30, */
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  avatar: {
    width: 65,
    height: 65,
    marginRight: 20,
    borderRadius: 63,
    borderWidth: 4,
    alignSelf: "center",
  },
  icon: {
    fontSize: 22,
    marginLeft: 20,
  },
  cover: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  cov: {
    fontSize: 14,
    color: "white",
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  /*   description:{
    fontSize:16,
    marginTop:10,
    backgroundColor:'red',
    textAlign: 'center'
  }, */
  containers: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E3E3",
    marginHorizontal: 10,
    paddingVertical: 13,
    alignItems: "center",
  },
  containersend: {
    flexDirection: "row",
    borderBottomWidth: 0,
    borderBottomColor: "#E5E3E3",
    marginHorizontal: 10,
    paddingVertical: 11,
    alignItems: "center",
  },
});
