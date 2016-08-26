/**
 * Created by liumin on 16/8/17.
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

var SellerCell = React.createClass({

    getDefaultProps(){
            return{
            shop:{}
        }
    },

    render(){
        return(
            <View>
                {this.renderCell()}
            </View>
        )
    },

    renderCell(){
        var shopImage = this.props.shop.frontImg ;
        shopImage = shopImage.replace('w.h','90.70');
        console.log(shopImage);
        return(
            <View style={styles.containerStyle}>
                <Image source={{uri:shopImage}} style={{width:90,height:70,marginLeft:10}}/>

                <View style={styles.detailViewStyle}>
                    <View style={{flexDirection:'row',alignItems:'center',width:width-120}}>
                        <Text ref="nameText" numberOfLines={1} style={styles.shopNameStyle}>{this.props.shop.name}</Text>
                        {this.renderImageGroup()}
                    </View>

                    <View style={styles.rateViewStyle}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            {this.renderRankImage()}
                            <Text style={styles.commonTextStyle}>{this.props.shop.markNumbers}评价</Text>
                        </View>
                        {this.renderArgpriceText()}
                    </View>
                    <View style={styles.priceViewStyle}>
                        <Text style={styles.commonTextStyle}>{this.props.shop.cateName}</Text>
                        <Text style={[styles.commonTextStyle,{marginLeft:5}]}>{this.props.shop.areaName}</Text>
                        <Text style={[styles.commonTextStyle,{position:'absolute',right:10}]} >距离?</Text>
                    </View>
                </View>
            </View>
        )
    },

    // 均价text
    renderArgpriceText(){
        if(this.props.shop.avgPrice <= 0){
            return ;
        }
        return(
            <Text style={[styles.commonTextStyle,{marginRight:10}]}>人均￥{this.props.shop.avgPrice}</Text>
        )
    },

    // 评分图片
    renderRankImage(){
        var imgs = [];
        //avgScore
        var fullCount = Math.floor(this.props.shop.avgScore);
        var imgArr = [];
        for(var i=0;i < fullCount;i ++){
            imgArr.push('icon_feedCell_star_full');
        }

        var decimal = this.props.shop.avgScore - fullCount ;
        if(decimal >= 0.75){
            imgArr.push('icon_feedCell_star_full');
        }else if(decimal >= 0.25){
            imgArr.push('icon_feedCell_star_half');
        }

        while(imgArr.length < 5){
            imgArr.push('icon_feedCell_star_empty');
        }

        console.log(this.props.shop.name,this.props.shop.avgScore,imgArr);

        for(var j=0;j < imgArr.length;j++){
            imgs.push(
                <Image key={j} source={{uri:imgArr[j]}} style={{width:12,height:12,marginRight:2}}/>
            )
        }
        return imgs;
    },

    renderImageGroup(){
        var imgs = [];
        if(this.props.shop.hasGroup){
            imgs.push(
                <Image key={1} source={{url:'oversea_icon_tuan'}} style={{width:12,height:12,marginLeft:5}}/>
            )
        }

        if(this.props.shop.isWaimai){
            imgs.push(
                <Image key={2} source={{url:'icon_merchant_mark_waimai'}} style={{width:12,height:12,marginLeft:3}}/>
            )
        }

        if(this.props.shop.extra.icons.length > 0){
            imgs.push(
                <Image key={3} source={{url:this.props.shop.extra.icons[0]}} style={{width:12,height:12,marginLeft:5}}/>
            )
        }
        return imgs;
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        height:90,
        backgroundColor: 'white',
        alignItems:'center',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5
    },

    detailViewStyle:{
        // padding:10,
        // marginLeft:10,
        height:70,
        width:width - 100,
        paddingLeft:10
    },

    shopNameStyle:{
        color:'rgb(51,51,51)',
        fontSize:15,
        maxWidth: width-120-15*3
},

    rateViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },

    priceViewStyle:{
        flexDirection:'row',
        marginTop:10
    },

    commonTextStyle:{
        color:'gray',
        fontSize:13
    }
});

module.exports = SellerCell ;