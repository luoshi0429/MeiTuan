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
    ListView,
} from 'react-native'

var HomeGuessYourLikeCell = require('./HomeGuessYourLikeCell');

var HomeGuessYourLikeView = React.createClass({

    getDefaultProps(){
        return {
            data:[]
        }
    },

    getInitialState(){
        return{
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
    },

    render(){
        // if(this.props.data.length > 0){
        //     alert('reload----',this.props.data.length);
        // }
        return(
            <View style={styles.containerStyle}>
                {this.renderTopView()}
                <ListView
                    scrollsToTop={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    // enableEmptySections={true}
                />
            </View>
        )
    },

    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri:'icon_homepage_guesslike_favor'}} style={{width:16,height:16,marginLeft:10}}/>
                <Text style={{color:'rgb(25,190,151)',fontSize:14,marginLeft:6}}>猜你喜欢</Text>
            </View>
        )
    },

    renderRow(rowData){
        // <Text>{rowData.title}</Text>
        return(
            <HomeGuessYourLikeCell
                data={rowData}
                campaignData={rowData.campaign}
            />
        )
    },

    // componentWillMount(){
    //     if(this.props.data.length > 0){
    //         alert(this.props.data.length)
    //     }else {
    //         alert('NONONO')
    //     }
    // },
    componentWillReceiveProps: function(nextProps) {
        if(nextProps.data.length > 0){
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(nextProps.data)
            })
        }
    },

    // componentWillReceiveProps(){
    //     console.log('props:',this.props.data);
    //     console.log('props1:',this.props.suibian);
    //
    //     //console.log('props1:',Array.isArray(this.props.data) );
    //     if(this.props.data.length > 0){
    //         console.log(this.props.data.length);
    //         console.log(this.props.data);
    //         this.setState({
    //             dataSource:this.state.dataSource.cloneWithRows(this.props.data)
    //         })
    //     }
    // },
    // componentDidUpdate(){
    //     console.log('props:',this.props.data);
    //         if(this.props.data.length > 0){
    //             console.log(this.props.data.length);
    //             console.log('111',this.props.data);
    //             this.setState({
    //                 dataSource:this.state.dataSource.cloneWithRows(this.props.data)
    //             })
    //         }
    // },

    componentDidMount(){
     
    
    }
});

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'white',
        marginTop:10
    },

    topViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:38,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    }
});

module.exports = HomeGuessYourLikeView ;