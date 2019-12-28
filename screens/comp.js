import React, {Component, useState} from 'react';
import {StyleSheet, View, Picker, ScrollView, Alert, Text} from 'react-native';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {Surface, Appbar, TextInput, Button, Headline} from 'react-native-paper';
import {yellow} from 'ansi-colors';

export default class CompScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const company = JSON.parse(
      JSON.stringify(navigation.getParam('title', '')),
    );
    console.log(company);
    return (
      <Container>
        <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
          <Appbar.BackAction onPress={() => navigate('Prep')} />
          <Appbar.Content title={company} style={{}} />
        </Appbar.Header>
        <Tabs locked={true}>
          <Tab
            heading="FTE"
            tabStyle={{backgroundColor: '#3BAD87'}}
            activeTabStyle={{backgroundColor: '#3BAD87'}}>
            <Text>Tab1</Text>
          </Tab>
          <Tab
            heading="INTERN"
            tabStyle={{backgroundColor: '#3BAD87'}}
            activeTabStyle={{backgroundColor: '#3BAD87'}}>
            <Text>Tab2</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
