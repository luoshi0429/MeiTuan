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

var HomeMallCommonView = React.createClass({
    
    getDefaultProps(){
        return{
            data:{},
            navigatorPush:null
        }
    },
    
    render(){
        return(
            <TouchableOpacity style={styles.touchStyle} onPress={()=>{this.navigatorPush(this.props.data.detailurl+'?')}}>
                <View style={styles.containerStyle}>
                    <Image source={{uri:this.props.data.img}} style={styles.mallImageViewStyle}>
                    <Text style={styles.nameTextStyle}>{this.props.data.name}</Text>
                    <Text style={styles.descriptionTextStyle}>{this.props.data.showtext.text}</Text>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    },

    navigatorPush(url){
        if(this.props.navigatorPush != null) {
            this.props.navigatorPush(url);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        margin:5
    },

    mallImageViewStyle:{
        width:90,
        height:70,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    },

    nameTextStyle:{
        fontSize:13,
        width:80,
        height:13,
        color:'white',
        textAlign:'center',
        backgroundColor:'rgba(201,201,198,0)',
        marginBottom:3
    },

    descriptionTextStyle:{
        fontSize:11,
        backgroundColor:'rgb(201,201,198)',
        borderRadius:2,
        padding:2
    }


});

module.exports = HomeMallCommonView ;