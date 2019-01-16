import React, { Component } from "react";
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Button,
  RefreshControl
} from "react-native";
import Row from "./row"; //If it's on the same folder
// import { Icon } from 'react-native-elements'
import TestUI from "./comp/TestUI";
import { createStackNavigator } from "react-navigation";

// // Require all your images here
const image1 = require("./assets/img1.jpg");
const image2 = require("./assets/img2.jpg");
const image3 = require("./assets/english.png");

var data = [
  { title: "ENGLISH", image: image1, color: "green" },
  { title: "URDU", image: image2, color: "#9dd463" },
  { title: "MATH", image: image3, color: "lightblue" },
  { title: "SCIENCE", image: image2, color: "gray" },
  { title: "COMPUTER", image: image2, color: "yellow" }
];

const styles = StyleSheet.create({
  container: {
    flex: 1
    //  paddingTop: 5,
    //  paddingLeft: 5,
    //  paddingVertical: 5
  },
  contentContainer: {
    // paddingVertical: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    backgroundColor: "green",
    width: "40%",
    height: 40
  },
  grid: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.ds.cloneWithRows(data),
      data: data,
      refreshing: false,
      cournter: 1,
      gettingData: true
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.grid}
          dataSource={this.state.dataSource}
          renderRow={data => (
            <Row
              itemInfo={data}
              onPress={data => navigate("Subject", { item: data })}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    );
  }
}

class SupjectDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Restaurant"
  };

  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props.navigation.state.params);
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Button
          title="Go to Subject"
          onPress={() =>
            navigate("Subject", { name: "navigate.state.params.title" })
          }
        />

        <Button
          title=" Test Start"
          color="#841584"
          onPress={() => navigate("TestUI")}
        />
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Subject: { screen: SupjectDetailScreen },
  TestUI: { screen: TestUI }
});

export default App;
