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
    WebView,
    Image,
    Platform
} from 'react-native'

var WebViewWithShareView = React.createClass({
    getDefaultProps(){
        return{
            url:'',
            navTitle:'',
            rightIconUri:'icon_navigationitem_share'
        }
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                {this.renderNavBar()}
                <WebView
                    // automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        )
    },

    renderNavBar(){
        return(
            <View style={styles.navBarContainerStyle}>
                <View style={styles.navBarStyle}>
                    <TouchableOpacity onPress={()=>{this.popToLastView()}}>
                        <Image source={{uri:'icon_navigationitem_back'}} style={{width:24,height:24,marginLeft:10}}/>
                    </TouchableOpacity>

                    <Text style={styles.navTitleViewStyle}>{this.props.navTitle}</Text>

                    <TouchableOpacity onPress={()=>{alert('分享')}}>
                        <Image source={{uri:this.props.rightIconUri}} style={{width:24,height:24,marginRight:10}}/>
                    </TouchableOpacity>

                </View>
            </View>
        )
    },

    popToLastView(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'green'
    },

    navBarContainerStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(243,242,242,1.0)'
    },

    navBarStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:44 ,
        marginTop:Platform.OS === 'ios' ? 20 : 0,
        alignItems:'center',
        borderBottomColor:'rgba(178,178,178,1.0)',
        borderBottomWidth:1
    },

    navTitleViewStyle:{
        fontSize:18,
        color:'black'
    }
});

module.exports = WebViewWithShareView ;