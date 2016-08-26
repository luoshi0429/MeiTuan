/**
 * Created by liumin on 16/8/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    RefreshControl,
} from 'react-native';

var HomeCategory = require('./HomeCategory');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HomeNavBar = require('./HomeNavBar');
var TopCategoryView = require('./CategoryPart/HomeTopCategoryView');
var SecondPartView = require('./SecondPart/HomeSecondPartView');
var ThirdPartView = require('./ThirdPart/HomeThirdPartView');
var ShoppingMallView = require('./ShoppingMall(FourthPart)/HomeShoppingMallView');
var HotView = require('./Hot/HomeHotView');
var GuessView = require('./GuessYourLike/HomeGuessYourLikeView');
var ShareWebView = require('./WebViewWithShareView');

var Home = React.createClass({

    getDefaultProps(){
        return{
            secondPart_api:'http://aop.meituan.com/api/entry?uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&utm_term=7.2.0&latlng=23.137262%2C%20113.369965&rn_package_version=0&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_medium=iphone&version_name=7.2.0&movieBundleVersion=100&utm_campaign=AgroupBgroupGhomepageH0&__reqTraceID=CE2168EB-ABC7-4A2D-B523-524647A9E63A&js_patch_version=1&ci=20&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831&name=brandarea',
            thirdPart_api:'http://api.meituan.com/group/v1/deal/topic/discount/city/20?__skua=62b2199b6661332b21bdbdf0b18253d1&movieBundleVersion=100&utm_campaign=AgroupBgroupH0&__skts=1471328951.221979&__vhost=api.mobile.meituan.com&utm_term=7.2.0&__skcy=9yAZ6uNTYPWqh22BgkcHizjiFKw%3D&ci=20&__skno=B577628E-84D5-4FCF-8084-66777559DEE3&client=iphone&uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&utm_medium=iphone&version_name=7.2.0&__reqTraceID=192D06D8-D916-44E8-8604-E8F3BDB718BE&latlng=23.137262%2C113.369965&js_patch_version=1&rn_package_version=0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831',
            shopingMall_api:'http://api.meituan.com/group/v1/shoppingmall/search?utm_campaign=AgroupBgroupH0&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831&__vhost=api.mobile.meituan.com&position=23.134750042831907%2C113.3754705304388&__skts=1471328959.751058&__skcy=rQMFDava1PxvDCpTBkksPgK4d2U%3D&utm_term=7.2.0&limit=6&ci=20&__skno=817A098A-4262-417C-8057-2B41D483341D&uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&utm_medium=iphone&version_name=7.2.0&accuracy=undefined&offset=0&__reqTraceID=2DF63CCB-F1ED-4BDD-9F4A-2CDBBF91A5DA&js_patch_version=1&rn_package_version=0&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=522db1e851c119afc36b727592e1e2d6',
            hotPart_api:'http://aop.meituan.com/api/entry?uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&utm_term=7.2.0&latlng=23.134750%2C113.375470&rn_package_version=0&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_medium=iphone&version_name=7.2.0&movieBundleVersion=100&utm_campaign=AgroupBgroupH0&__reqTraceID=7EB8BA5F-5D87-4196-AB7D-C64F2D822448&js_patch_version=1&ci=20&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831&name=hotcate',
            guessYourLike_api:'http://api.meituan.com/group/v2/recommend/homepage/city/20?__skck=3c0cf64e4b039997339ed8fec4cddf05&movieBundleVersion=100&__vhost=api.mobile.meituan.com&position=23.137262%2C113.369965&wifi-mac=f0%3Ab4%3A29%3A64%3Ac9%3A0a&utm_term=7.2.0&limit=40&ci=20&__skcy=KPKqlw0305ex7RHay6WkZu%2F8vEU%3D&__skua=62b2199b6661332b21bdbdf0b18253d1&__skts=1471328955.277344&__skno=64281343-5DAA-485C-A4E7-CDD2AEF58B50&client=iphone&wifi-name=503xiaomi_5G&uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&version_name=7.2.0&utm_medium=iphone&wifi-cur=0&wifi-strength=&offset=0&supportId=1&__reqTraceID=CA5C10F9-54DE-42A7-B6DD-102A6885BA2E&js_patch_version=1&rn_package_version=0&utm_campaign=AgroupBgroupGhomepageH0&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831'
        }
    },

    getInitialState(){
        return {
            isRefreshing: false,
            secondPartData: {},
            thirdPartData: {},
            shoppingMallData: {},
            totalShoppingMall: 0,
            hotData: {},
            guessYourLikeData: {}

        }
    },

    render() {
        return (
            <View style={styles.container}>
                <HomeNavBar
                    pushToNextView = {(tempStr)=>{this.pushToCategory(tempStr)}}
                />
                <ScrollView
                    scrollsToTop={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            tintColor="gray"
                            title="Loading..."
                            titleColor="gray"
                            colors={['#ff0000','#00ff00','#0000ff']} // 安卓
                            progressBackgroundColor="#ffff00"
                        />
                     }
                >
                    <TopCategoryView />
                    <SecondPartView 
                        data={this.state.secondPartData}
                        pushToFlashSaleDetailView={(url,title)=>{this.pushToFlashSaleDetailView(url,title,'icon_navigationitem_share')}}
                    />

                    <ThirdPartView
                        data={this.state.thirdPartData}
                        navigatorPush={(url,title)=>{this.pushToFlashSaleDetailView(url,title,'icon_navigationitem_share')}}
                    />

                    <ShoppingMallView
                        data={this.state.shoppingMallData.data}
                        mallListUrl={this.state.shoppingMallData.jumpto}
                        tips={this.state.shoppingMallData.tips}
                        totalMall={this.state.shoppingMallData.count}
                        pushToShoppingMallDetail={(url,title)=>{this.pushToFlashSaleDetailView(url,title,'1')}}
                    />

                    <HotView 
                        data={this.state.hotData}
                        navigatorPush={(url,title)=>{this.pushToFlashSaleDetailView(url,title,'1')}}
                    />

                    <GuessView
                        data={this.state.guessYourLikeData.data}
                    />
                </ScrollView>
            </View>
        );
    },

    pushToCategory(){
        this.props.navigator.push({
            component:HomeCategory,
            title:'分类'
        });
    },

    pushToFlashSaleDetailView(url,title,rightIconUrl){
        url = url.replace('imeituan://www.meituan.com/web?url=','');
        url = url.replace('imeituan://www.meituan.com/web/?url=','');
        url = url.replace('imeituan://www.meituan.com/train/hybrid/web?url=','');
        url = url.replace('imeituan://','');
        url = unescape(url);
        url = url.replace('?hidden_nav_bar=1','');
        url = url + 'uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_term=7.2.0&utm_source=AppStore&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&rn_package_version=0&version_name=7.2.0&utm_medium=iphone&lat=23.134738&utm_campaign=AgroupBgroupGhomepage_brandmodule1_2349H0&js_patch_version=9&lng=113.375195&f=iphone&ci=20&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-26-16-54546';

        this.props.navigator.push({
            component:ShareWebView,
            passProps:{'url' : url,navTitle:title,rightIconUri:rightIconUrl}
        })
    },

    onRefresh(){
        this.fetchAllData();
    },

    componentDidMount(){
        this.fetchAllData();
        
    },

    fetchAllData(){
        this.setState({
            isRefreshing:true
        });

        this.fetchSecondPartData();
        this.fetchThirdPartData();
        this.fetchShoppingMallData();
        this.fetchHotData();
        this.fetchGuessYourLikeData();
    },

    fetchSecondPartData(){
        fetch(this.props.secondPart_api)
            .then((response) => response.json())
            .then((responseData) => {
                if(this.state.thirdPartData != null && this.state.shoppingMallData != null && this.state.hotData != null && this.state.guessYourLikeData != null){
                    this.setState({
                        secondPartData:responseData.data[0]['resource'],
                        isRefreshing:false

                    })
                }else {
                    this.setState({
                        secondPartData:responseData.data[0]['resource']
                    })
                }
            })
            .catch((error) => {
                if(error){
                    alert('获取第二部分数据失败');
                    console.log('第二部分:'+error);
                }
            })
    },

    fetchThirdPartData(){
        fetch(this.props.thirdPart_api)
            .then((response) => response.json())
            .then((responseData) => {
                if(this.state.secondPartData != null && this.state.shoppingMallData != null && this.state.hotData != null && this.state.guessYourLikeData != null){
                    this.setState({
                        thirdPartData:responseData.data,
                        isRefreshing:false

                    })
                }else {
                    this.setState({
                        thirdPartData:responseData.data
                    })
                }
            })
            .catch((error) => {
                if(error){
                    alert('获取第三部分数据失败');
                    console.log('第三部分:'+error);
                }
            })
    },

    fetchShoppingMallData(){
        fetch(this.props.shopingMall_api)
            .then((response) => response.json())
            .then((responseData) => {
                if(this.state.secondPartData != null && this.state.thirdPartData != null && this.state.hotData != null && this.state.guessYourLikeData != null){
                    this.setState({
                        shoppingMallData:responseData,
                        isRefreshing:false
                    })
                }else {
                    this.setState({
                        shoppingMallData:responseData
                    })
                }
            })
            .catch((error) => {
                if(error){
                    alert('获取商场数据失败');
                    console.log('商场:'+error);
                }
            })
    },

    fetchHotData(){
        fetch(this.props.hotPart_api)
            .then((response) => response.json())
            .then((responseData) => {
                if(this.state.secondPartData != null && this.state.shoppingMallData != null && this.state.thirdPartData != null && this.state.guessYourLikeData != null){
                    this.setState({
                        hotData:responseData.data[0]['resource'],
                        isRefreshing:false

                    })
                }else {
                    this.setState({
                        hotData:responseData.data[0]['resource']
                    })
                }
            })
            .catch((error) => {
                if(error){
                    alert('获取热门频道失败');
                    console.log('热门:'+error);
                }
            })
    },
    
    fetchGuessYourLikeData(){
        fetch(this.props.guessYourLike_api)
            .then((response) => response.json())
            .then((responseData) => {
                if(this.state.secondPartData != null && this.state.shoppingMallData != null && this.state.thirdPartData != null && this.state.hotData != null){
                    this.setState({
                        guessYourLikeData:responseData,
                        isRefreshing:false

                    })
                }else {
                    this.setState({
                        guessYourLikeData:responseData
                    })
                }
            })
            .catch((error) => {
                if(error){
                    alert('猜你喜欢失败');
                    console.log('猜你喜欢:',error);
                }
            })
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(236,235,232)'
    }

});

module.exports = Home ;