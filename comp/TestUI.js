import React, { Component } from 'react';
import {Text,Button,View} from 'react-native';

class TestUi extends Component {
   
    
    render() { 
        return (
            <View>
                <Text style={{padding: 10, fontSize: 42}}>start</Text>
            <Button
            title=" Ans 1"
            onPress={()=>alert("ok")}
            />
            <Button
             title=" Ans 1"
            />
            <Button
             title=" Ans 1"
            />
            <Button
             title=" Ans 1"
            />
            </View>
          );
    }
}
 
export default TestUi;