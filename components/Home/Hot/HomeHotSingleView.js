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
var maxCols = 4 ;

var HomeHotSingleView = React.createClass({
    
    getDefaultProps(){
        return{
            data:{},
            navigatorPush:null
        }
    },
    
    render(){
        return(
            <TouchableOpacity style={styles.touchableStyle} onPress={()=>{this.navigatorPush(this.props.data.target,this.props.data.mainTitle)}}>
                <View style={styles.containerStyle}>
                    <Text style={styles.mainTextStyle}>{this.props.data.mainTitle}</Text>
                    <Text style={styles.deputyTextStyle}>{this.props.data.deputyTitle}</Text>
                    <Image source={{uri:this.props.data.entranceImgUrl69}} style={styles.imageViewStyle}/>
                </View>
            </TouchableOpacity>
        )
    },

    navigatorPush(url,title){
        if(title=='亲子'){
            alert(url);
            url='http://i.meituan.com/baby/mobile/mt/index'
        }
        if(this.props.navigatorPush != null){
            this.props.navigatorPush(url+'?',title)
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        width: width / maxCols,
        height:width / maxCols * 1.2,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        borderRightColor:'#e8e8e8',
        borderRightWidth:1
    },

    touchableStyle:{
        width: width / maxCols,
        height:width / maxCols * 1.2
    },

    mainTextStyle:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'bold',
        marginTop:8
    },

    deputyTextStyle:{
        marginLeft:10,
        color:'gray',
        fontSize:12
    },

    imageViewStyle:{
        width: width / maxCols - 10,
        height:width / maxCols - 20,
        // marginLeft:10
        position:'absolute',
        right:1,
        bottom:1,
        resizeMode:'cover',
    }

});

module.exports = HomeHotSingleView ;