/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
/* import NavigationService from '../../Service/navigationService';
import { NAV_TYPES } from '../../Navigation/navTypes'; */
import ProBox from './ProductEditBox';

export default class All extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <ProBox
                    proName={'Bought of Product1'}
                    proPrice={'5$'}
                    
                />
       
               
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  
})