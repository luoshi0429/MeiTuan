/**
 * Created by liumin on 16/8/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var MineCell = require('./MineCell');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var MineHeader = React.createClass({
    render() {
        return (
            <View>
                <View style={styles.topViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击登录')}}>
                        <Image source={{uri:'icon_userreview_defaultavatar'}} style={{width:55,height:55,marginLeft:10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击登录')}}>
                        <Text style={{marginLeft:10,fontSize:15,color:'white',marginBottom:20}}>请点击登录</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleViewStyle}>
                    {this.renderMiddleView('order1','美团券')}
                    {this.renderMiddleView('order3','评价')}
                    {this.renderMiddleView('order4','收藏')}
                </View>

                <MineCell
                    iconName="collect"
                    title="我的订单"
                    rightTitle="查看全部订单"
                />
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomBtn()}
                </View>
            </View>
        );
    },

    renderMiddleView(iconName,name){
        return(
            <TouchableOpacity onPress={()=>{alert(name)}}>
                <View style={styles.middleBtnStyle}>
                    <Image source={{uri:iconName}} style={{width:22,height:15}}/>
                    <Text style={{color:'white',fontSize:15,marginLeft:3}}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    },

    renderBottomBtn(){
        var btns = [];
        var iconNames = ['order1','order2','order3','order4'];
        var names = ['待付款','待使用','待评价','退款/售后'];
        for(var i =0;i < iconNames.length;i++){
            btns.push(
                <TouchableOpacity key={i} onPress={()=>{alert('待做');}}>
                    <View style={styles.bottomInnerBtnStyle}>
                        <Image source={{uri:iconNames[i]}} style={{width:35,height:25}} />
                        <Text style={{color:'gray',fontSize:12}}>{names[i]}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return btns;
    }
});

const styles = StyleSheet.create({
    topViewStyle:{
        flexDirection:'row',
        alignItems:'flex-end',
        backgroundColor: 'rgba(25,182,158,1.0)',
        height:125,
        paddingBottom:5
    },

    middleViewStyle:{
        height:38,
        marginBottom:5,
        backgroundColor:'rgba(24,168,147,1.0)',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-around',
    },

    middleBtnStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:(width + 3) / 3,
        height:30,
        borderRightColor:'white',
        borderRightWidth:1
    },

    bottomViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        marginBottom:10
    },

    bottomInnerBtnStyle:{
        width:width/4,
        height:60,
        justifyContent:'center',
        alignItems:'center'
        
    }
});

module.exports = MineHeader ;