import React from "react";
import { View, Modal, StyleSheet, Pressable, Text } from "react-native";
import { Saga } from "../Modules/user";
export default class CustomText extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  LopLg(leaguage) {
    var rs = [];
    if (leaguage && leaguage.length > 0) {
      leaguage.map((item, index) => [
        rs.push(
          <Pressable style={[styles.Kh]} key={index}>
            <Text style={styles.textStyle}>{item.title} </Text>
          </Pressable>
        ),
      ]);
    }
    return rs;
  }
  render() {
    const { modalVisible } = this.state;
    const { Leaguage } = this.props;
    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            /*    Alert.alert("Modal has been closed."); */
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.modalView}>
              <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
              {this.LopLg(Leaguage)}
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.buttonAlert]}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textlanguage}>
            language<Text style={{ fontSize: 20 }}> ▾</Text>
          </Text>
        </Pressable>
      </>
    );
  }
}
const styles = StyleSheet.create({
  /* leaguage */
  Ch: {
    width: "50%",
  },
  Eng: {
    width: "50%",
  },
  Kh: {
    width: "50%",
  },
  modalView: {
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    padding: 20,
    bottom: 0,
  },
  textlanguage: {
    color: "white",
    fontSize: 17,
  },
  buttonAlert: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },

  buttonClose: {},
  textStyle: {
    color: "black",
    marginVertical: 15,
    fontSize: 17,
  },
  cancel: {
    color: "red",
    marginBottom: 15,
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
