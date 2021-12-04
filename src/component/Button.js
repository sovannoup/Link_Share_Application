import React from "react";
import NavigationService from "./../Service/navigationService";
import { NAV_TYPES } from "./../Navigation/navTypes";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
export default class Button extends React.Component {
  render() {
    var { title, press } = this.props;

    return (
      <>
        <TouchableOpacity
          style={styles.button}
          onPress={press}
          /* this.props.language({enlish:"en",chinese:"cn"}) */
          /*   NavigationService.navigate(NAV_TYPES.CONFIRM_REGISTER)
                       } */
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#fff",
    width: "70%",
    justifyContent: "center",
    borderRadius: 5,
    /* marginTop: '9%', */
  },
  buttonText: {
    textAlign: "center",
    color: "#346cab",
    fontSize: 18,
    fontWeight: "bold",
  },
});
