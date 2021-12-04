/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import NavigationService from '../../Service/navigationService';
import { NAV_TYPES } from '../../Navigation/navTypes';
import ProBox from './ProductBox';

export default class Cart extends Component {
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
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
                <View style={styles.line} />
                <ProBox
                    proName={'Title of Product'}
                    proPrice={'168'}
                    proNum={'1'}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        width: '95%',
        marginHorizontal: '2.5%',
        borderTopWidth: 0.6,
        borderColor: 'gray',
    },
})