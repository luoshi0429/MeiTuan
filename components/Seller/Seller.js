/**
 * Created by liumin on 16/8/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView,
    ListView,
    RefreshControl
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var SellerCell = require('./SellerCell');

var Seller = React.createClass({

    getDefaultProps(){
        return{
            all_api:'http://api.meituan.com/group/v1/poi/select/cate/-1?channelId=3&movieBundleVersion=100&__vhost=api.mobile.meituan.com&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=62b2199b6661332b21bdbdf0b18253d1&utm_term=7.2.0&limit=20&ci=20&__skcy=YFIOAndZZJzJWmODTRAJuvtj2e8%3D&__skts=1471329960.497148&sort=smart&__skno=C85CA8EF-5D34-4DEA-A6AE-827C49D90D00&client=iphone&uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&areaId=-1&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&version_name=7.2.0&mypos=23.134636%2C113.375179&utm_medium=iphone&cityId=20&offset=0&coupon=all&__reqTraceID=DFE10AF3-138B-4901-B8A4-7C945BAB9FE6&js_patch_version=1&rn_package_version=0&utm_campaign=AgroupBgroupGmerchantH0&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831',
            discount_api:'http://api.meituan.com/group/v1/poi/select/cate/-1?channelId=3&movieBundleVersion=100&__vhost=api.mobile.meituan.com&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=62b2199b6661332b21bdbdf0b18253d1&utm_term=7.2.0&limit=20&ci=20&__skcy=4c1Kp%2Ffdzu3aUA6Uo9M%2Ffx%2FlUG4%3D&__skts=1471330013.348674&sort=smart&__skno=34B0E328-224E-4DED-8966-3D5077A27B32&client=iphone&uuid=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&areaId=-1&utm_content=CFF2BF164BA5EEF0F80EE24D78A5A616C6B65043D2F34FFA5A66ED0D9B8044DE&utm_source=AppStore&version_name=7.2.0&mypos=23.134636%2C113.375179&utm_medium=iphone&cityId=20&offset=0&coupon=hasgroup%7Cchoosesitting&__reqTraceID=85887E32-D631-442F-A207-0930C1936EA7&js_patch_version=1&rn_package_version=0&utm_campaign=AgroupBgroupGmerchantH0&msid=5737A721-DA41-44E8-A2D2-9D239344797E2016-08-16-14-29831'
        }
    },

    getInitialState(){
        return{
            isRefreshing:false ,
            selectedSegment:'all',
            arrowAllImageName:'arrow_down',
            arrowCityImageName:'arrow_down',
            arrowSortImageName:'arrow_down',
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBarView()}
                {this.renderConditionView()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderCurrentLocationView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            title="Loading..."
                            titleColor='rgb(25,182,158)'
                        />
                    }
                />
            </View>
        );
    },

    renderNavBarView(){
        return(
            <View style={styles.navBarViewStyle}>
                <View style={styles.navBarContainerStyle}>
                    <TouchableOpacity>
                        <Image source={{uri:'icon_homepage_map'}} style={{width:30,height:30,marginLeft:8}}/>
                    </TouchableOpacity>
                    {this.renderNavTitleView()}
                    <TouchableOpacity>
                        <Image source={{uri:'icon_shop_search'}} style={{width:20,height:20,marginRight:8}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    renderNavTitleView(){
        var allTitleColor = this.state.selectedSegment === 'all' ? {color:'white'} : {color:'rgb(25,182,158)'} ;
        var allViewBgColor = this.state.selectedSegment === 'all' ? {backgroundColor:'rgb(25,182,158)'} : {backgroundColor:'white'} ;
        var discountTitleColor = this.state.selectedSegment === 'discount' ? {color:'white'} : {color:'rgb(25,182,158)'} ;
        var discountViewBgColor = this.state.selectedSegment === 'discount' ? {backgroundColor:'rgb(25,182,158)'} : {backgroundColor:'white'} ;
        return(
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        selectedSegment:'all'
                    });
                    this.fetchData(this.props.all_api);
                }}>
                    <View style={[styles.navTitleLeftViewStyle,allViewBgColor]}>
                        <Text style={allTitleColor}>全部商家</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        selectedSegment:'discount'
                    });
                    this.fetchData(this.props.discount_api);
                }}>
                    <View style={[styles.navTitleRightViewStyle,discountViewBgColor]}>
                        <Text style={discountTitleColor}>优惠商家</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },

    renderConditionView(){
        return(
            <View style={styles.conditionViewStyle}>
                <TouchableOpacity onPress={()=>{
                this.setState({
                    arrowAllImageName:this.state.arrowAllImageName === 'arrow_down' ? 'arrow_up': 'arrow_down'
                })
            }}>
                    <View style={styles.conditionCategoryViewStyle}>
                        <Text style={styles.conditionTextStyle}>全部分类</Text>
                        <Image source={{uri:this.state.arrowAllImageName}} style={styles.conditionArrowStyle}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                this.setState({
                    arrowCityImageName:this.state.arrowCityImageName === 'arrow_down' ? 'arrow_up': 'arrow_down'
                })
            }}>
                    <View style={styles.conditionCategoryViewStyle}>
                        <Text style={styles.conditionTextStyle}>全城</Text>
                        <Image source={{uri:this.state.arrowCityImageName}} style={styles.conditionArrowStyle}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                this.setState({
                    arrowSortImageName:this.state.arrowSortImageName === 'arrow_down' ? 'arrow_up': 'arrow_down'
                })
            }}>
                    <View style={styles.conditionCategoryViewStyle}>
                        <Text style={styles.conditionTextStyle}>智能排序</Text>
                        <Image source={{uri:this.state.arrowSortImageName}} style={styles.conditionArrowStyle}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },

    renderCurrentLocationView(){
        return(
            <View style={styles.currentLocationViewStlye}>
                <Text style={{color:'gray',fontSize:12,marginLeft:15}}>当前:天河区棠安苑</Text>
                <Image source={{uri:'icon_coupon_poorNetwork_refresh'}} style={{width:12,height: 12,marginRight: 12}}/>
            </View>
        )
    },

    // 请求网络数据
    componentDidMount(){
        this.fetchData(this.props.all_api);
    },

    fetchData(url){
        this.setState({
            isRefreshing:true
        });

        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                var shops = responseData['data'];
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(shops),
                    isRefreshing:false
                });
            })
            .catch((error) => {
                this.setState({
                    isRefreshing:false
                });
                if(error){
                    console.log(error);
                }
            })
    },

    renderRow(rowData){
        return(
            <SellerCell
                shop={rowData}
            />
        )
    },

    onRefresh(){
        if(this.state.selectedSegment == 'all'){
            this.fetchData(this.props.all_api);
        }else {
            this.fetchData(this.props.discount_api);
        }

    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(236,235,232)'
    },

    navBarViewStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(243,242,242,1.0)'
    },

    navBarContainerStyle:{
        height:44 ,
        marginTop:Platform.OS === 'ios' ? 20 : 0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'rgba(178,178,178,1.0)',
        borderBottomWidth:1
    },

    navTitleLeftViewStyle:{
        padding:8,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
        backgroundColor:'white',
        borderColor:'rgb(25,182,158)',
        borderWidth:1
    },

    navTitleRightViewStyle:{
        padding:8,
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        backgroundColor:'rgb(25,182,158)',
        borderColor:'rgb(25,182,158)',
        borderWidth:1
    },

    conditionViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:34,
        backgroundColor:'rgb(247,247,247)'
    },

    conditionCategoryViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:(width - 3)/ 3,
        height:20,
        borderRightColor:'#e8e8e8',
        borderRightWidth:1
    },

    conditionTextStyle:{
        color:'rgb(120,120,120)',
        fontSize:13
    },

    conditionArrowStyle:{
        width:8,
        height:8,
        marginLeft:5
    },

    currentLocationViewStlye:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'rgb(235,235,235)',
        height:30,
        borderTopColor:'rgba(243,242,242,1.0)',
        borderTopWidth:1
    }


});

module.exports = Seller ;