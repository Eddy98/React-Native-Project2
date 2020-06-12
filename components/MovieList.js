import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default class MovieList extends Component {
  render() {
    return (
      <View style={this.props.style}>
        {this.props.movies ? (
          <View>
            <FlatList
              renderItem={({ item }) => (
                <Row {...item} key={item.Title} onSelectMovie={this.props.onSelectMovie} />
              )}
              data={this.props.movies}
              keyExtractor={item => item.title}
            />
          </View>
        ) : (
          <Text>No Results</Text>
        )}
      </View>
    );
  }
}

const Row = (props) => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}
  >
    <View style={{ flexDirection: "row" }}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: props.Poster }} />
      <View
        style={{ flexDirection: "column", paddingLeft: 10, marginRight: 50 }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.Title}</Text>
        <Text>{props.Year}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: { padding: 10 },
});
