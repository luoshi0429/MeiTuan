/**
 * Created by liumin on 16/8/15.
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

var HomeCategory = React.createClass({
    getDefaultProps(){
        url:''
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.pop();
                }}>
                    <Text>回去回去</Text>
                    <Text>哈哈哈:{this.props.url}</Text>
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    }
});

module.exports = HomeCategory ;