/**
 * Created by liumin on 16/8/23.
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


var HomeSpecialOfferCommonView = React.createClass({

    getDefaultProps(){
        return {
            data:{}
        }
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.data.mainTitleImg}} style={{resizeMode:'contain',width:60,height:16,marginBottom:3}}/>
                    <Text style={{color:'gray',fontSize:10}}>{this.props.data.deputyTitle}</Text>
                </View>
                <Image source={{uri:this.props.data.entranceImgUrl}} style={{width:40,height:30}}/>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'

    },

    leftViewStyle:{
        marginTop:15,
        marginBottom:10
    }
});

module.exports = HomeSpecialOfferCommonView ;