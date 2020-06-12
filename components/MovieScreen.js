import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class MovieScreen extends Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 350 }}
          source={{ uri: this.props.route.params.Poster }}
        />
        <Text style={{fontSize:30, fontWeight:'bold'}}>{this.props.route.params.Title}</Text>
      </View>
    );
  }
}
