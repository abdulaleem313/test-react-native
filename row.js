import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 5,
    textAlign: "center"
  },
  photo: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 50
  }
});

const Row = props => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => props.onPress(props.itemInfo)}>
      <View>
        <Image source={props.itemInfo.image} style={styles.photo} />

        <Text style={styles.text}>{`${props.itemInfo.title} `}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default Row;
