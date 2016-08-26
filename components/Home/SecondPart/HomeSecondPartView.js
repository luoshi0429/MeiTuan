/**
 * Created by liumin on 16/8/20.
 */
/** 抢购*/
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var FlashSaleView = require('./HomeFlashSaleView');
var SpecialOfferView = require('./HomeSpecialOfferView');
var HomeSecondPartView = React.createClass({
    getDefaultProps(){
        return {
            data: {},
            pushToFlashSaleDetailView:null
        }
    },

    render(){
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={()=>{this.navigatorPush(this.props.data.activityArea.touchUrlForList+'?','名店抢购')}
                }>
                    <FlashSaleView
                        flashSaleData={this.props.data.activityArea}
                    />
                </TouchableOpacity>

                <SpecialOfferView
                    specialOfferData={this.props.data.topicArea}
                    navigatorPushFuc = {(url,title)=>{this.navigatorPush(url,title)}}
                />
            </View>
        )
    },

    navigatorPush(url,title){
        if(this.props.pushToFlashSaleDetailView != null){
            this.props.pushToFlashSaleDetailView(url,title);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        width: width,
        marginTop:10
    }
});

module.exports = HomeSecondPartView ;