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
    Image,
} from 'react-native'

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HotSingerView = require('./HomeHotSingleView');

var HomeHotView = React.createClass({
    
    getDefaultProps(){
        return{
            data:{},
            navigatorPush:null
        }
    },
    
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.mainTitleViewStyle}>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:3}}>
                        <Image source={{uri:'home_hot'}} style={{width:15,height:16,marginRight:3}}/>
                        <Text style={{color:'rgb(225,11,0)',fontSize:14,fontWeight:'bold'}}>热门频道</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:"gray",fontSize:12,marginRight:5}}>查看全部</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:8,marginRight:10}}/>
                    </View>
                </View>

                <View style={styles.hotViewStyle}>
                    {this.renderHotSingleView()}
                </View>
            </View>
        )
    },


    renderHotSingleView(){
        var cateDatas = this.props.data.cateArea ;
        if(Array.isArray(cateDatas)){
            var singleViews = [];
            for(var i=0;i<cateDatas.length;i++){
                singleViews.push(
                    <HotSingerView
                        key={i}
                        data={cateDatas[i]}
                        navigatorPush={(url,title)=>{this.navigatorPush(url,title)}}
                    />
                )
            }
            return singleViews;
        }
    },

    navigatorPush(url,title){
        if(this.props.navigatorPush != null){
            this.props.navigatorPush(url,title);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:10,
        backgroundColor:'white',
    },

    mainTitleViewStyle:{
        height:38,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },

    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },

    hotViewStyle:{
        flexDirection:'row',
        width:width,
        flexWrap:'wrap'
    },

});

module.exports = HomeHotView ;