//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Edit from './Edit';
import {getBlogs, deleteBlogs} from '../actions';
import {connect} from "react-redux";
import _ from 'lodash';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class Blogs extends Component {
    componentDidMount(){
        this.props.getBlogs();
    }

    render() {
        console.log('Blogs.js', this.props.listOfBlogs)
        return (
            <View style={styles.container}>
                <Text>Fetch Blogs List Data</Text>
                <FlatList style={{width:'100%'}} 
                data={this.props.listOfBlogs}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>{
                    return(
                        <View style={styles.FlatView}>
                            <Text style={styles.FlatText}>{item.title}</Text>
                            <Text style={styles.FlatSubText}>{item.content}</Text>
                        
                         <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
                         <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit',{...item})}>
                                 <View style={{marginRight:15}}>
                                     <Icon size={30} color="white" name="edit" />  
                                 </View>
                         </TouchableHighlight>   
                         <TouchableHighlight onPress={() =>this.props.deleteBlogs(item.key)} >
                                 <View>
                                     <Icon size={30} color="white" name="close" />
                                 </View>
                         </TouchableHighlight> 
                         </View> 
                         </View> 
                    )
                }} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:10
    },
    FlatView:{
        elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#575FCF', padding:20
    },
    FlatText:{
        fontSize:28,  fontWeight:'bold', color:'#fff', marginBottom: 10
    },
    FlatSubText:{
        fontSize:20, lineHeight:30, color:'#fff'
    },
    FlatEditView:{
        flexDirection:'row', justifyContent:'flex-end', marginTop:25
    }
});

function mapStateToProps(state){
    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })
    return{
        listOfBlogs
    }
}
 
//make this component available to the app
export default connect(mapStateToProps,{getBlogs, deleteBlogs}) (Blogs);


