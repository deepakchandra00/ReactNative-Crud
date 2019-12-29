//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {editBlogs} from '../actions';
import {connect} from 'react-redux'

// create a component
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.navigation.state.params.title,
          content: this.props.navigation.state.params.content,
          key: this.props.navigation.state.params.key
        }
        //this.state = this.initialState;
        
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChangeText = (key, val) => {
        this.setState({ [key]: val})
      }
      Submit = () =>{ 
        console.log(this.state.content)
        this.props.editBlogs(this.state.title, this.state.content, this.state.key);
        this.props.navigation.navigate('Blogs')
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>Post </Text>
                <TextInput style={styles.inputStyle} name="title" value={this.state.title} onChangeText={val => this.onChangeText('title', val)} placeholder="Title"></TextInput>
                <TextInput style={styles.inputStyle} name="content" value={this.state.content} onChangeText={val => this.onChangeText('content', val)} placeholder="Content"></TextInput>
                <Button title="Submit Button" onPress={this.Submit} style={styles.buttonStyle}>Submit</Button>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:30,
        backgroundColor: '#fff',
    },
    inputStyle:{
        marginTop:20,
        height:40,
        borderColor:'gray',
        borderWidth:1
    },
    buttonStyle:{
        backgroundColor:'#900'
    }
});

//make this component available to the app
export default connect(null, {editBlogs}) (Edit);
