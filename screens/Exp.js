import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Exp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>Title: {JSON.stringify(navigation.getParam('title',''))}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
