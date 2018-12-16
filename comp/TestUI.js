import React, { Component } from 'react';
import {Text,Button,View,TouchableOpacity,  StyleSheet } from 'react-native';

class TestUi extends Component {
   
    
    render() { 
        return (
            <View style={styles.container}>
                
                <View style={styles.header} >
                <Text style={{padding: 10, fontSize: 20}}>start</Text>
                </View>
                <View style={styles.btnDiv}>

                    <TouchableOpacity style={styles.button} >
                        <Text style={{lineItem: "center"}}>ans1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text>ans 2</Text>
                    </TouchableOpacity>
          
                </View>
                <View style={styles.btnDiv1}>
                    <TouchableOpacity style={styles.button} >
                        <Text>ans 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  >
                        <Text>ans 4</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.next}>
                        <Text> Next </Text>
                    </TouchableOpacity>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',      
    },
    header: {
        width: 300,
        height: 100, 
        backgroundColor: 'powderblue', 
        marginTop: 30, 
        marginLeft: 30
    },
    btnDiv: {
        flexDirection: 'row',
        justifyContent: 'space-around',       
        padding: 10,      
    },
    btnDiv1: {
        flexDirection: 'row',
        justifyContent: 'space-around',       
        paddingLeft: 10, 
        paddingRight:10,

    },    
    button: {
      alignItems: 'center',
      width: '40%',
      height: 50,
      backgroundColor: '#DDDDDD',     
    },
    next: {
        width: '85%',
        height: 30,
        backgroundColor: 'blue',
        marginLeft: 26,
        marginTop:10,
        alignItems: "center"
         
    }
  
  })
 
export default TestUi;