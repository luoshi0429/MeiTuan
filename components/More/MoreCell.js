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
    Switch,
    Image
} from 'react-native';

var MoreCell = React.createClass({

    getDefaultProps(){
        return{
            title:'',
            isSwitch:false,
            rightTitle:''
        }
    },

    getInitialState(){
      return{
          isOn:false
      }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{
                alert(this.props.title)
            }}>
                <View style={styles.container}>
                    <Text style={{marginLeft:10,fontSize:16}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){

        if(this.props.isSwitch){
            return(
                <Switch
                    value={this.state.isOn}
                    onValueChange={this.switchValueDidChanged}
                    style={{marginRight:8}}
                />
            )
        } else {
            return(
                <View style={styles.rightViewStyle}>
                    {this.renderRightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImageStyle} />
                </View>
            )
          }
    },

    renderRightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={{color:'gray',fontSize:11,marginRight:5}}>{this.props.rightTitle}</Text>
            )
        }
    },

    switchValueDidChanged(){
            this.setState({
                isOn :!this.state.isOn
            });
    }
});

const styles = StyleSheet.create({
    container: {
        height:40,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor:'rgba(236,236,236,1.0)',
        borderBottomWidth:0.5
    },

    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },

    rightImageStyle:{
        width:8,
        height:13,
        marginRight:8
    }
});

module.exports = MoreCell ;