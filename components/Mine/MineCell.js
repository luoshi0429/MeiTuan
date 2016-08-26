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
    TouchableOpacity
} from 'react-native';

var MineCell = React.createClass({

    getDefaultProps(){
        return{
            iconName:'',
            title:'',
            rightTitle:''
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert(this.props.title)}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.iconName}} style={{width:25,height:25}}/>
                        <Text style={{marginLeft:10,fontSize:15}}>{this.props.title}</Text>
                    </View>

                    <View style={styles.rightViewStyle}>
                        {this.renderRightTextView()}
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{ width:8, height:13, marginRight:8}}/>
                    </View>

                </View>
            </TouchableOpacity>

        );
    },

    renderRightTextView(){
        if(this.props.rightTitle.length>0){
            return(
                <Text style={{color:'gray',fontSize:13,marginRight:10}}>{this.props.rightTitle}</Text>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height:40,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'white',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        flexDirection:'row',
        marginLeft:10,
        alignItems:'center'
    },

    rightViewStyle:{
        flexDirection:'row',
    }
});

module.exports = MineCell ;