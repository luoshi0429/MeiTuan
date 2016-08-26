
/**
 * Created by liumin on 16/8/21.
 */

import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var BottomViwe = React.createClass({

    getDefaultProps(){
        return{
            data:{}
        }
    },

    getInitialState() {
        return{
        }
    },
    render(){

        //console.log('---',this.props.data);
        return(
            <View style={styles.containerStyle}>
                <Text style={{fontSize:15,marginRight:8,width:width * 0.5 - 10,height:13,textAlign:'center'}}>{this.props.data.brandname}</Text>
                <View style={styles.priceViewStlye}>
                    <Text style={{color:'rgb(73,153,149)',fontSize:12}}>￥{this.props.data.price}</Text>
                    <Text style={{color:'white',fontSize:11,backgroundColor:'rgb(245,150,48)'}}>再减{this.props.data.price-this.props.data.campaignprice}</Text>
                </View>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:10
    },

    priceViewStlye:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
    }
});

module.exports = BottomViwe ;