/**
 * Created by liumin on 16/8/22.
 */
// 第二部分的右边
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

var CommonView = require('./HomeSpecialOfferCommonView');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var HomeSpecialOfferView = React.createClass({

    getDefaultProps(){
        return {
            specialOfferData: [],
            navigatorPushFuc:null
        }
    },

    render(){
        var topData = this.props.specialOfferData[0];
        var bottomData = this.props.specialOfferData[1];
        return(
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={()=>{this.navigatorPush(topData.target,'天天特价')}}>
                    <CommonView
                        data={topData}
                    />
                </TouchableOpacity>

                <View style={{backgroundColor:'#e8e8e8',height:1}}>
                </View>
                <TouchableOpacity onPress={()=>{this.navigatorPush(bottomData.target,'外卖超值折扣菜')}}>
                    <CommonView
                        data={bottomData}
                    />
                </TouchableOpacity>
            </View>
        )
    },

    navigatorPush(url,title){
        if(this.props.navigatorPushFuc != null){
            this.props.navigatorPushFuc(url,title);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        width:width * 0.5
    }
});

module.exports = HomeSpecialOfferView ;