/**
 * Created by liumin on 16/8/26.
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

var viewHeight = 60 ;

var HomeThirdPartTopView = React.createClass({

    getDefaultProps(){
        return{
            data:{}
        }
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.leftTextViewStyle}>
                    <Text numberOfLines={1} style={{color:this.props.data.typeface_color,fontSize:17,fontWeight:'bold',width:width*0.5-20,marginBottom:3}}>{this.props.data.title}</Text>
                    <Text numberOfLines={1} style={{color:this.props.data.deputy_typeface_color,fontSize:13,width:width*0.5-20}}>{this.props.data.deputytitle}</Text>
                </View>
                {this.renderRightImageView()}
            </View>
        )
    },

    renderRightImageView(){
        var imageurl = this.props.data.imageurl;
        var tempStr = (width * 0.5 + 10)+'.'+viewHeight;
        imageurl = imageurl.replace('w.h',tempStr);
        return(
            <Image source={{uri:imageurl}} style={styles.rightImageViewStyle}/>
        )
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        width:width,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },

    leftTextViewStyle:{
        marginLeft:10
    },

    rightImageViewStyle:{
        resizeMode:'contain',
        height:viewHeight,
        width:width*0.5+10,
        marginTop:2,
        marginBottom:2
    }
});

module.exports = HomeThirdPartTopView ;