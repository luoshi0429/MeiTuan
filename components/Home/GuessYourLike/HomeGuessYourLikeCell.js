/**
 * Created by liumin on 16/8/25.
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

var leftImageWH = 70 ;
var rightTopViewHeight = 18 ;

var HomeGuessYourLikeCell = React.createClass({

    getDefaultProps(){
        return{
            data:{},
            campaignData:{}
        }
    },

    render(){

        return(
            <View style={styles.containerStyle}>
                {this.renderLeftImageView()}
                <View style={styles.rightViewStyle}>
                    {this.renderRightTopView()}
                    {this.renderSubtitleText()}
                   <View style={styles.rightViewBottomView}>
                       <View style={styles.rightBottomPriceView}>
                           {this.renderPriceTextView()}
                           {this.renderCampaignText()}
                       </View>
                       <Text style={styles.bottomRightInfoTextView}>{this.props.data.bottomRightInfo}</Text>
                   </View>

                </View>
            </View>
        )
    },

    renderCampaignText(){
        if(this.props.campaignData.tag != null && this.props.campaignData.tag != ''){
            return(
                <Text style={styles.campaignTextView}>{this.props.campaignData.tag}</Text>
            )
        }
    },

    renderLeftImageView(){
        var imageUrl = this.props.data.imageUrl;
        // console.log(this.props.data.title,'image-----',imageUrl);
        if(this.props.data._type != 'waimai'){
            var tempStr = leftImageWH+'.'+leftImageWH;
            imageUrl = imageUrl.replace('w.h',tempStr);
            // console.log('changed image-----',imageUrl);
        }else{
            imageUrl = imageUrl.replace('.webp','');
        }

        var tagIconUrl = this.props.data.imageTagIcon ;
        if(tagIconUrl != null && tagIconUrl != ''){
            return(
                <Image source={{uri:imageUrl}} style={styles.leftImageViewStyle}>
                    <Image source={{uri:tagIconUrl}} style={{width:40,height:15,top:5,resizeMode:'contain'}}/>
                </Image>
            );
        }else{
            return(
                <Image source={{uri:imageUrl}} style={styles.leftImageViewStyle}/>
            );
        }
    },

    renderRightTopView(){
        if(this.props.data._type != 'waimai') {
            return (
                <View style={styles.rightViewTopView}>
                    <Text numberOfLines={1} style={styles.titleTextStyle}>{this.props.data.title}</Text>
                    <Text style={styles.distanceTextStyle}>{this.props.data.topRightInfo}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.waimaiRightTopViewStyle}>
                    <Text numberOfLines={1} style={{fontSize:15,fontWeight:'bold'}}>{this.props.data.title}</Text>
                    <Image source={{uri:this.props.data.imageTitle}} style={{width:22,height:15,marginLeft:3,resizeMode:'contain'}}/>
                </View>
            )
        }
    },

    renderSubtitleText(){
        if (this.props.data._type != 'waimai') {
            return (
                <Text numberOfLines={2} style={styles.subTitleTextStyle}>{this.props.data.subTitle}</Text>
            )
        } else {
            return (
                <View>
                    <Text numberOfLines={1} style={styles.subTitleTextStyle}>{this.props.data.subTitle}</Text>
                    <Text numberOfLines={1} style={styles.subTitleTextStyle}>{this.props.data.subTitle2}</Text>
                </View>
            )
        }
    },

    renderPriceTextView(){
        if (this.props.data._type != 'waimai') {
            return (
                <Text
                    style={styles.priceTextView}>{this.props.data.mainMessage}{this.props.data.mainMessage2}<Text style={{color:'gray',fontSize:11,marginLeft:3}}>{this.props.data.subMessage}</Text></Text>
            )
        } else {
            return(
                <Text numberOfLines={1} style={{width:width-leftImageWH-90,color:'rgb(38,162,155)',fontSize:11}}>
                    {this.props.data.subMessage}
                </Text>
            )
        }

    },

});

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        // backgroundColor:'purple',
        padding:8,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },

    leftImageViewStyle:{
        width:leftImageWH,
        height:leftImageWH,
        borderRadius:2
    },

    rightViewStyle:{
        marginLeft:10,
        justifyContent:'center',
        width: width - leftImageWH - 30
},

    rightViewTopView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: width - leftImageWH - 30,
        height:rightTopViewHeight
    },

    waimaiRightTopViewStyle:{
        flexDirection:'row',
        width: width - leftImageWH - 30
    },

    titleTextStyle:{
        fontSize:15,
        fontWeight:'bold',
        width: width - leftImageWH - 65
    },

    distanceTextStyle:{
        position:'absolute',
        right:0,
        fontSize:12,
        color:'gray',
        lineHeight:rightTopViewHeight,
        height:rightTopViewHeight
    },

    subTitleTextStyle:{
        color:'gray',
        fontSize:12,
        marginTop:5
    },

    rightViewBottomView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5,
    },

    rightBottomPriceView:{
        flexDirection:'row',
        alignItems:'center',
    },

    priceTextView:{
        color:'rgb(38,162,155)',
        fontSize:14,
        fontWeight:'bold'
    },

    campaignTextView:{
        color:'rgb(211,135,81)',
        fontSize:10,
        borderColor:'rgb(211,135,81)',
        borderWidth:1,
        borderRadius:2,
        paddingLeft:1,
        paddingRight:1,
        textAlign:'center',
        height:12,
        marginLeft:3
    },

    bottomRightInfoTextView:{
        color:'gray',
        fontSize:12
    }
});

module.exports = HomeGuessYourLikeCell ;