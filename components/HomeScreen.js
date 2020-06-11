import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import axios from "axios";

import MovieList from "./MovieList";

export default class HomeScreen extends Component {
  state = {
    search: "",
    movieList: []
  };

  SearchMovie = (value) => {
    let url = "http://www.omdbapi.com/?apikey=ac8bf643&s=" + value;
    axios.get(url).then((res) => {
      this.setState({movieList: res.data.Search })
    });
  };

  handleSearchChange = (value) => {
    // this.setState({ search: value });
    this.SearchMovie(value);
  };

  render() {
    return (
      <View style={{ padding: 8 }}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={this.handleSearchChange}
        />
        <MovieList style={styles.list} movies={this.state.movieList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
  },
  list: {
    padding: 10,
  },
});
