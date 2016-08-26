/**
 * Created by liumin on 16/8/15.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    Platform, // 判断是iOS还是android
} from 'react-native';

// 引入tabBar
import TabNavigator from 'react-native-tab-navigator'

var Dimensions = require('Dimensions');
var {width, height,scale} = Dimensions.get('window');

var Home = require('../Home/Home');
var Seller = require('../Seller/Seller');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({

    getInitialState(){
        return{
            selectedTab : 'home'
        }
    },

    render() {
        return (
            <TabNavigator>
                {this.renderTabBarChild('home','icon_tabbar_homepage','icon_tabbar_homepage_selected','首页',Home)}
                {this.renderTabBarChild('seller','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','商家',Seller)}
                {this.renderTabBarChild('mine','icon_tabbar_mine','icon_tabbar_mine_selected','我的',Mine)}
                {this.renderTabBarChild('more','icon_tabbar_misc','icon_tabbar_misc_selected','更多',More)}
            </TabNavigator>
        );
    },

    renderTabBarChild(tabName,iconImageName,selectedIconImageName,title,component){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === tabName}
                title={title}
                selectedTitleStyle={styles.iconSelectedStyle}
                renderIcon={() => <Image source={{uri:iconImageName}} style={styles.tabbarIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedIconImageName}} style={styles.tabbarIconStyle} />}
                onPress={() => this.setState({ selectedTab: tabName })}
            >
                <Navigator
                    initialRoute={{title:title,component:component}}
                    configureScene={()=>{  // push出来的动画样式
                            return Navigator.SceneConfigs.PushFromRight
                        }}
                    renderScene={(route,navigator) =>
                            {
                                let Component = route.component;
                                // ...route表示将route中的所有键值对以属性赋值的方式展开({name:'XXX'}=>name='XXX')
                                // return <Component {...route.passProps} navigator={navigator} />
                                return <Component {...route.passProps} navigator={this.props.navigator} />
                            }
                        }
                />
            </TabNavigator.Item>
        )
    }
});

const styles = StyleSheet.create({

    tabbarIconStyle:{
        width:25,
        height:25
    },
    iconSelectedStyle:{
        color:'rgba(25,182,158,1.0)'
    }
});

module.exports = Main ;