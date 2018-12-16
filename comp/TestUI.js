import React, { Component } from 'react';
import {Text,Button,View,TouchableOpacity,  StyleSheet, ScrollView } from 'react-native';

class TestUi extends Component {
   
    
    render() { 
        return (
            <ScrollView contentContainerStyle={styles.container}>
                
                <View style={styles.header} >
                <Text style={{padding: 10, fontSize: 20}}>This defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items arThis defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).</Text>
                </View>
                
                <View style={styles.btnDiv}>
                    <TouchableOpacity style={styles.button} >
                        <Text>ans1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text>ans 2</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnDiv}>           
                    <TouchableOpacity style={styles.button} >
                        <Text>ans 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  >
                        <Text>ans 4</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity style={styles.nextBtn}>
                        <Text> Next </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     padding: '5%',       
    },
    header: {
        width: '100%',
        height: 'auto', 
        backgroundColor: 'powderblue', 
        marginTop: 30,  
    },
    btnDiv: { 
        flexDirection: 'row',
        justifyContent: 'space-between',   
        paddingTop: '2%',
    }, 
    button: { 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '48%',
      height: 40, 
      backgroundColor: '#DDDDDD',     
    },
    nextBtn: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        height: 40,
        backgroundColor: 'blue', 
        marginTop:10,
        alignItems: "center"
         
    }
  
  })
 
export default TestUi;