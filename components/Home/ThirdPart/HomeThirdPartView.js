/**
 * Created by liumin on 16/8/25.
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = require('./HomeThirdCommonView');
var TopView = require('./HomeThirdTopView');

var HomeThirdPartView = React.createClass({
    
    getDefaultProps(){
        return {
            data:{},
            navigatorPush:null
        }
    },
    
    render(){
        return(
            <View style={styles.containerStyle}>
                {this.renderTopView()}
                <View style={styles.allCommonViewStyle}>
                    {this.renderChildView()}
                </View>
            </View>
        )
    },

    renderTopView(){
        if(this.props.data.length > 0 && this.props.data.length % 2 != 0){
            return(
                <TouchableOpacity style={styles.topTouchStyle} onPress={()=>{this.navigatorPush(this.props.data[0].tplurl,this.props.data[0].maintitle)}}>
                    <TopView
                        data={this.props.data[0]}
                    />
                </TouchableOpacity>

            )
        }
    },

    renderChildView(){
        var childViews = [];
        var i = 0 ;
        if(this.props.data.length > 0 && this.props.data.length % 2 != 0){
            i ++ ;
        }
        for(i;i<this.props.data.length;i++){
            childViews.push(
                     <CommonView key={i}
                                 data={this.props.data[i]}
                                 navigatorPush={(url,title)=>{this.navigatorPush(url,title)}}
                     />
            )
        }
        return childViews;
    },

    navigatorPush(url,title){
        if(this.props.navigatorPush != null) {
            this.props.navigatorPush(url + '?',title);
        }
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        marginTop:10
    },

    topTouchStyle:{
        width:width,
        height:64
    },
    
    allCommonViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

module.exports = HomeThirdPartView ;