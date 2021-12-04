/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image,
} from 'react-native'
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
import navigationService from '../Service/navigationService';
export default class ProBox extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
           
            
        }

    }
    render() {
        var {press,proName,proPrice}=this.props
        return (
            <TouchableOpacity style={styles.productBox}
                onPress={press}
            >
                <Image
                    resizeMode={'cover'}
                    style={styles.imgStyle}
                    source={require('../Assets/img.jpg')}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{proName}</Text>
                    <Text style={{ fontSize: 15, marginVertical: '8%',marginBottom:'20%' }}>{proPrice}</Text>
                   {/*  <Text style={{ fontSize: 15 }}>Qty:  {this.state.proNum}</Text> */}
                </View>
               {/*  <Text style={{ fontSize: 15, marginTop: '15%', marginLeft: '5%' }}>Total:  {this.state.proPrice * this.state.proNum}$</Text> */}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    productBox: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginVertical: 0,
        flexDirection: 'row',
        height:120,
        paddingBottom:20,
        borderBottomWidth:.5,
        borderColor:'gray',
        paddingTop:20
    },
    imgStyle: {
        height: '100%',
        width: '25%',
        borderRadius: 10,
    },
})