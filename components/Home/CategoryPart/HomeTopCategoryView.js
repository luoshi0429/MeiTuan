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
    ScrollView,
    Image,
    ListView
} from 'react-native'

var category = require('./../Data/TopCategory.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var maxCols = 5;
var cellWH = width / maxCols ;

var TopCategoryListView = require('./HomeTopCategoryListView');

var HomeCategory = React.createClass({

    getInitialState(){
       return{
           currentIndicator:0
       }
    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <ScrollView
                    scrollsToTop={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderTopCategoryView()}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicatorView()}
                </View>

            </View>
        )
    },
    
    renderTopCategoryView(){
        var listViews = [];
        var categoryData = category.data;
        for(var i=0;i<categoryData.length;i++){
            listViews.push(
                <TopCategoryListView
                    key={i}
                    categoryArr={categoryData[i]}
                />
            )
        }
        return listViews;
    },

    renderIndicatorView(){
        var indicatorViews = [];
        var categoryData = category.data;
        for(var i=0;i<categoryData.length;i++){
            var colorStr = this.state.currentIndicator == i ? 'rgba(24,168,147,1.0)' : '#dddddd';
            indicatorViews.push(
                <Text key={i} style={{fontSize: 20,marginRight:5,color:colorStr}}>&bull;</Text>
            )
        }
        return indicatorViews ;
    },

    onScrollAnimationEnd(e){
        var currentIndex = Math.floor(e.nativeEvent.contentOffset.x / width);

        this.setState({
            currentIndicator:currentIndex
        })
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },

    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center'
    }

});

module.exports = HomeCategory ;