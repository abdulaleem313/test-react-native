
import React from 'react'
import { Alert, View, Text, ImageBackground, TouchableHighlight } from 'react-native';

const Row = (props) => ( 
    <TouchableHighlight style={{flex: 1, height: 150}} onPress={() => props.onPress(props.itemInfo)}>
      <Text style={{flex: 1, backgroundColor: props.itemInfo.color, fontSize: 30, textAlign: 'center', paddingTop: 60}}> {props.itemInfo.title}</Text>  
    </TouchableHighlight>    
)

export default Row