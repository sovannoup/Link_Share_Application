/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image,
} from 'react-native'
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
/* import navigationService from '../../Service/navigationService'; */
export default class ProBox extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            proName: this.props.proName,
            proPrice: this.props.proPrice,
            proNum: this.props.proNum,
        }

    }
    render() {
        return (
            <TouchableOpacity style={styles.productBox}
                onPress={() => NavigationService.navigate(NAV_TYPES.VIEW_ORDER, { name: 'sovan' })}
            >
                <Image
                    resizeMode={'cover'}
                    style={styles.imgStyle}
                    source={require('../Assets/img.jpg')}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16 , fontWeight:'bold'}}>{this.state.proName}</Text>
                    <Text style={{ fontSize: 15, marginVertical: '8%' }}>Price:  {this.state.proPrice}$</Text>
                    <Text style={{ fontSize: 15 }}>Qty:  {this.state.proNum}</Text>
                </View>
                <Text style={{ fontSize: 15, marginTop: '15%', marginLeft: '15%', fontWeight:'bold' }}>Total:  {this.state.proPrice * this.state.proNum}$</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    productBox: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginVertical: 20,
        flexDirection: 'row',
    },
    imgStyle: {
        height: '105%',
        width: '25%',
        borderRadius: 10,
        
    },
})