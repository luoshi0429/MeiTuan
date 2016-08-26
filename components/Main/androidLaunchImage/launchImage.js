/**
 * Created by liumin on 16/8/15.
 */
import React,{component} from 'react'
import {
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image
}from 'react-native'

var Main = require('../Main');
var LaunchImage = React.createClass({
    render(){
        return(
           <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/>
        )
    },

    componentDidMount(){
        // 2s切换到主页
        setTimeout(()=>{
            this.props.navigator.push({
                component:Main
            })
        },2000);
    }
});

const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});

module.exports = LaunchImage ;