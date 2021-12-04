/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
import ProBox from './ProductEditBox';

export default class Order extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      /*   console.log('878787878787878787878',nextProps)
const {edite}=this.props;
    
if(nextProps.edite.product_id &&  nextProps.edite.product_id != edite.product_id){
     console.log('reutle',nextProps.edite)
      if(nextProps.edite.product_id.message==="success"){
          this.setState({Lg: nextProps.edite.product_id.results})
          console.log('idididididid<><>><><><>><><><>',nextProps.edite.product_id.results)
          
          
      }
  
} */

    }
componentDidMount(){
}
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <ProBox
                    proName={'Edited of Product1'}
                    proPrice={'somethink'}
                    press={()=>NavigationService.navigate(NAV_TYPES.VIEW_EDIT)}
                    
                
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