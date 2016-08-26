/**
 * Created by liumin on 16/8/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var MoreCell = require('./MoreCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarContainerStyle}>
                    <View style={styles.navBarStyle}>
                        <Text style={styles.navTitleViewStyle}>更多</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{marginTop:15}}>
                        <MoreCell
                            title='扫一扫'
                        />
                    </View>

                    <View style={{marginTop:15}}>
                        <MoreCell
                            title='省流量模式'
                            isSwitch={true}
                        />
                        <MoreCell
                            title='消息提醒'
                        />
                        <MoreCell
                            title='邀请好友使用美团'
                        />
                        <MoreCell
                            title='清空缓存'
                            rightTitle='20.2M'
                        />
                    </View>

                    <View style={{marginTop:15}}>
                        <MoreCell
                            title='问卷调查'
                        />
                        <MoreCell
                            title='支付帮助'
                        />
                        <MoreCell
                            title='网络诊断'
                        />
                        <MoreCell
                            title='关于美团'
                        />
                        <MoreCell
                            title='我要应聘'
                        />
                    </View>

                    <View style={{marginTop:15}}>
                        <MoreCell
                            title='精品应用'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'rgba(235,235,235,1.0)'
    },

    navBarContainerStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(243,242,242,1.0)'
    },

    navBarStyle:{
        height:44 ,
        marginTop:Platform.OS === 'ios' ? 20 : 0,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'rgba(178,178,178,1.0)',
        borderBottomWidth:1
    },

    navTitleViewStyle:{
        fontSize:18
    }

});

module.exports = More ;