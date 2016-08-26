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
    ScrollView
} from 'react-native'

var MallCommonView = require('./HomeMallCommonView');

var HomeShoppingMallView = React.createClass({

    getDefaultProps(){
        return{
            data:{},
            tips:'',
            totalMall:0,
            mallListUrl:'',
            pushToShoppingMallDetail:null
        }
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={()=>{this.navigatorPush(this.props.mallListUrl)}}>
                    <View style={styles.mainTitleViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:3}}>
                            <Image source={{uri:'shopping_mall'}} style={{width:15,height:16,marginRight:3}}/>
                            <Text style={{color:'rgb(126,60,250)',fontSize:14,fontWeight:'bold'}}>购物商场</Text>
                        </View>
                        <View style={styles.rightViewStyle}>
                            <Text style={{color:"gray",fontSize:12,marginRight:5}}>{this.props.tips}</Text>
                            <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:8,marginRight:10}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <ScrollView
                    scrollsToTop={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderMallViews()}
                    {this.renderSeeAllMall()}
                </ScrollView>
            </View>
        )
    },

    renderMallViews(){
        var mallViews = [];
        for(var i=0;i<this.props.data.length;i++){
            var data = this.props.data[i];
            mallViews.push(
                <MallCommonView key={i}
                    data={data}
                                navigatorPush={(url)=>{this.navigatorPush(url)}}
                />
            )
        }
        return mallViews ;
    },

    renderSeeAllMall(){
        return(
            <TouchableOpacity onPress={()=>{this.navigatorPush(this.props.mallListUrl)}}>
                <View style={{margin:5}}>
                    <Image source={{uri:'zjgc'}} style={{ width:90,height:70, borderRadius:3, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:12,backgroundColor:'rgba(1,1,1,0)',marginBottom:3}}>查看全部</Text>
                        <Text style={{color:'white',fontSize:13,backgroundColor:'rgba(1,1,1,0)'}}>{this.props.totalMall}家 > </Text>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    },
    
    navigatorPush(url){
        // alert(url);
        if(this.props.pushToShoppingMallDetail != null) {
            this.props.pushToShoppingMallDetail(url,'购物中心');
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        marginTop:10
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
    }
});

module.exports = HomeShoppingMallView ;