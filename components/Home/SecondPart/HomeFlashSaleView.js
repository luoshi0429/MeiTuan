/**
 * Created by liumin on 16/8/20.
 */
/**限时抢购View*/

// 自定义字体 fontFamily: DS-Digital
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

var BottomView = require('./HomeFlashSaleBottomView');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


var HomeFlashSaleView = React.createClass({

    getDefaultProps(){
        return{
            flashSaleData:{}
        }
    },

    getInitialState() {
        return{

        }
    },
    
    render(){
        //alert(this.props.flashSaleData.title);
        //console(this.props.flashSaleData);
        return(
            <View style={styles.containerStyle}>
                <View style={styles.topViewStyle}>
                    <View style={styles.clockViewStyle}>
                        <Image source={{uri:'brandmodule_clock'}} style={{width:15,height:15,marginBottom:5}} />
                        <Text style={{color:'white',fontSize:10}}>距结束</Text>
                    </View>
                    <View style={styles.leftTimeViewStyle}>
                        <Text style={{fontFamily:'DS-Digital',fontSize:18,color:'red'}}>{this.props.flashSaleData.title}</Text>
                        {this.renderTimeView()}
                    </View>
                </View>
                <BottomView
                    data={this.props.flashSaleData.deals}
                />
            </View>
        )
    },

    renderTimeView(){
        // var imageUrl = this.props.flashSaleData.activityImgUrl;
        // imageUrl = imageUrl.replace('w.h','70.25');
        // console.log(url);
        var endDate = new Date(this.props.flashSaleData.end * 1000);
        // var year = endDate.getFullYear();
        var month = endDate.getMonth() + 1; // (0-11) must plus 1
        var day = endDate.getDate(); // getDay is get the weekday.
        var hour = endDate.getHours();
        var min = endDate.getMinutes();
        var sec = endDate.getSeconds() ;
        return(
            <View style={styles.timeViewStyle}>
                {/**<Image source={{uri:imageUri}} style={{width:70,height:25}} />*/}
                <Text style={styles.dateTextStyle}>{month}月</Text>
                <Text style={{fontSize:12}}>:</Text>
                <Text style={styles.dateTextStyle}>{day}日</Text>
                <Text style={{fontSize:12}}>:</Text>
                <Text style={styles.dateTextStyle}>{hour}时</Text>
            </View>
        )
    },


    componentDidMount(){
        // alert('限时抢购');
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        width:width * 0.5,
        alignItems:'center',
        borderRightColor:'#e8e8e8',
        borderRightWidth:1
    },

    topViewStyle:{
        marginTop:15,
        // marginLeft:20,
        flexDirection:'row'
    },

    clockViewStyle:{
        backgroundColor:'red',
        padding:5,
        justifyContent:'center',
        alignItems:'center'

    },

    leftTimeViewStyle:{
        alignItems:'center',
        backgroundColor:'rgb(244,252,218)'
    },

    timeViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        paddingLeft:5,
        paddingRight:5
    },

    dateTextStyle:{
        color:'white',
        fontSize:12,
        backgroundColor:'rgb(83,86,91)',
        padding:2
    }
});

module.exports = HomeFlashSaleView ;