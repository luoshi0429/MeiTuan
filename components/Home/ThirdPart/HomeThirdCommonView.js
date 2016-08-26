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
var iconImageWH = 45 ;

var HomeThirdCommonView = React.createClass({
    
    getDefaultProps(){
        return{
            data:{},
            navigatorPush:null
        }
    },

    render(){
        return(
            <TouchableOpacity style={styles.touchStyle} onPress={()=>{this.navigatorPush(this.props.data.tplurl+'?',this.props.data.maintitle)}}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftTextViewStyle}>
                        <Text numberOfLines={1} style={{color:this.props.data.typeface_color,fontSize:15,width:width*0.5-iconImageWH-20,marginBottom:3}}>{this.props.data.title}</Text>
                        <Text numberOfLines={1} style={{color:this.props.data.deputy_typeface_color,fontSize:12,width:width*0.5-iconImageWH-20}}>{this.props.data.deputytitle}</Text>
                    </View>
                    {this.renderRightImageView()}
                </View>
            </TouchableOpacity>
        )
    },

    renderRightImageView(){

        var imageurl = this.props.data.imageurl;
        var tempStr = iconImageWH+'.'+iconImageWH;
        imageurl = imageurl.replace('w.h',tempStr);

        return(
            <Image source={{uri:imageurl}} style={styles.rightImageViewStyle}/>
        )
    },

    navigatorPush(url,title){
        if(this.props.navigatorPush != null) {
            this.props.navigatorPush(url ,title);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        width:width*0.5,
        height:55,
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#e8e8e8',
        borderRightColor:'#e8e8e8',
        borderBottomWidth:1,
        borderRightWidth:1
    },

    leftTextViewStyle:{
        marginLeft:10
    },

    rightImageViewStyle:{
        height:iconImageWH,
        width:iconImageWH
    },

    touchStyle:{
        width:width * 0.5,
        height:55
    },
});

module.exports = HomeThirdCommonView ;