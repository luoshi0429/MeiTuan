/**
 * Created by liumin on 16/8/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var HeaderView = require('./MineHeaderView');
var MineCell = require('./MineCell');
var Mine = React.createClass({

    getInitialState(){
        return{
            alpha:0.0,
            isRefreshing:false
        }
    },

    render() {
        return (
            <View style={styles.container}>

                 <ScrollView
                     refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000','#00ff00','#0000ff']} // 安卓
                            progressBackgroundColor="#ffff00"
                        />
                     }
                     scrollEventThrottle={3}
                     onScroll={this.scollViewDidScroll}
                     style={{backgroundColor:'rgba(235,235,235,1.0)'}}
                     automaticallyAdjustContentInsets={false}
                     // contentInset={{top:64,left:0,bottom:0,right:0}}
                     // contentOffset={{x:0,y:-64}}
                 >
                     <HeaderView />
                     <View style={{marginBottom:10}}>
                         <MineCell 
                            iconName="collect"
                            title="我的钱包"
                         />
                         <MineCell
                             iconName="collect"
                             title="抵用卷"
                         />
                     </View>

                     <View style={{marginBottom:10}}>
                         <MineCell
                             iconName="collect"
                             title="好友去哪"
                         />
                     </View>

                     <View style={{marginBottom:10}}>
                         <MineCell
                             iconName="collect"
                             title="积分商城"
                         />
                         <MineCell
                             iconName="collect"
                             title="免费福利"
                         />
                     </View>

                     <View style={{marginBottom:10}}>
                         <MineCell
                             iconName="collect"
                             title="好友去哪"
                             rightTitle="New"
                         />
                     </View>

                     <View style={{marginBottom:10}}>
                         <MineCell
                             iconName="collect"
                             title="联系客服"
                         />
                     </View>

                     <View style={{marginBottom:10}}>
                         <MineCell
                             iconName="collect"
                             title="我要合作"
                             rightTitle="轻松开店,招财进宝"
                         />
                     </View>

                  </ScrollView>

                {this.renderHeaderView()}

            </View>
        );
    },

    renderHeaderView(){
        var colorStyle = {backgroundColor:'rgba(25,182,158,'+this.state.alpha+')'};
      return(
          <View ref={'navBarView'} style={[styles.navBarViewStyle,colorStyle]} >
              <View style={styles.navBarContainerStyle}>
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('设置')}}>
                      <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{alert('消息')}}>
                      <Image source={{uri:'icon_homepage_message'}} style={styles.navImageStyle}/>
                  </TouchableOpacity>

              </View>
          </View>
      )
    },

    onRefresh(){
        this.setState({
            isRefreshing:true
        });

        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
        },2000) ;
        console.log('下拉刷新');
    },

    renderChildView(){
        var texts = [];
        for(var i=0;i<20;i++) {
           texts.push(
               <Text key={i} style={{color:'red',height:40}}>hahahahhhaa</Text>
           )
        }
        return texts ;
    },

    scollViewDidScroll(e){
        console.log(e.nativeEvent.contentOffset.y);
        var offsetY = e.nativeEvent.contentOffset.y;
        if( offsetY < 64 && offsetY > 0){

        }
        var alpha = offsetY / (125-64) ;
        var navBar = this.refs.navBarView;
        if(alpha>1){
            alpha = 1 ;
        }

        if(alpha < 0){
            alpha=0;
        }

        if(this.state.alpha == alpha){
            return ;
        }
        this.setState({
            alpha : alpha
        });
    }
});

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    navBarViewStyle:{
        position:'absolute',
        top:0,
        height:64,
        width:width
    },

    navBarContainerStyle:{
        height:44,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'

    },

    navImageStyle:{
        width:24,
        height:24,
        marginRight:8,
        marginLeft:8
    }

});

module.exports = Mine ;