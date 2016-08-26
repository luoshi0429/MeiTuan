/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Main = require('./components/Main/Main');
class MeiTuan extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{title:'',component:Main}}
            
            configureScene={()=>{  // push出来的动画样式
                            return Navigator.SceneConfigs.PushFromRight
                        }}

            renderScene={(route,navigator) => {
                                let Component = route.component;
                                // ...route表示将route中的所有键值对以属性赋值的方式展开({name:'XXX'}=>name='XXX')
                                return <Component {...route.passProps} navigator={navigator} />
                            }
                        }
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
