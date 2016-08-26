/*** Created by liumin on 16/8/15. */
import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ListView
} from 'react-native'


var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var maxCols = 5;
var cellWH = width / maxCols ;

var HomeTopCategoryListView = React.createClass({
    
    getDefaultProps(){  
        return{
            categoryArr:[]
        }
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        return{
            dataSource:ds.cloneWithRows(this.props.categoryArr)
        }
    },

    render(){
        return(
            <ListView
                scrollsToTop={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
                scrollEnabled={false}
            />
        )
    },

    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{alert(rowData.title)}} style={{width:cellWH,height:cellWH}}>
                <View style={[styles.cellViewStyle,{backgroundColor:this.randomColor()}]}>
                    <Text style={{color:'white',fontSize:15}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    },

    randomColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var colorStr = 'rgb('+r+','+g+','+b +')';
        return colorStr
    }
});

const styles = StyleSheet.create({
    listViewStyle:{
        flexDirection:'row',
        width:width,
        flexWrap:'wrap'
    },

    cellViewStyle:{
        width:cellWH,
        height:cellWH,
        alignItems:'center',
        justifyContent:'center'
    }
});

module.exports = HomeTopCategoryListView ;