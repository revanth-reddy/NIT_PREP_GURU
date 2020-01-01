import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <Text style={styles.text}>Let's Go</Text>
        <ActivityIndicator size="large" color="#455A64" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02a8a8',
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    fontWeight: 'bold',
    color: '#455A64',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
});
