/**
 * Created by liumin on 16/8/19.
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

var HomeNavBar = React.createClass({
    
    getDefaultProps(){
        return{
            pushToNextView: null
        }
    },
    
    render(){
        return(
            <View style={styles.navBarContainerStlye}>
                <View style={styles.navBarStyle}>
                    <TouchableOpacity onPress={()=>{alert('更换地区')}}>
                        <View style={styles.navBarLeftViewStyle}>
                            <Text style={{color:'white',fontSize:14,marginRight:3}}>广州</Text>
                            <Image source={{uri:'icon_homepage_downarrow'}} style={{width:11,height:9}}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{alert('去搜索')}}>
                        <View style={styles.navBarCenterViewStyle}>
                            <Image source={{uri:'icon_shop_search'}} style={{width:14,height:14}}/>
                            <Text style={{color:'#dddddd',fontSize:13,marginLeft:5}}>输入商家、品类、商圈</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.navRightViweStyle}>
                        <TouchableOpacity onPress={this.pushToNext}>
                            <Image source={{uri:'icon_navigationitem_scan_white'}} style={styles.navRightImageStyle}/>
                        </TouchableOpacity>

                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    </View>
                </View>
            </View>
        )
    },

    pushToNext(){

        if(this.props.pushToNextView == null){
            return ;
        }
        
        this.props.pushToNextView('Hello');
    }
});

const styles = StyleSheet.create({
    navBarContainerStlye:{
        height:64,
        backgroundColor:'rgb(25,182,158)'
    },

    navBarStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:44,
        marginTop:20
    },

    navBarLeftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    navBarCenterViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:28,
        borderRadius:14,
        paddingLeft:10,
        paddingRight:20
    },

    navRightViweStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    navRightImageStyle:{
        width:20,
        height:20,
        marginLeft:10
    }
});

module.exports = HomeNavBar ;