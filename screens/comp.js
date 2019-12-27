import React, { Component } from 'react';
import {StyleSheet, View, Picker, ScrollView, Alert, Text} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { Surface, Appbar, TextInput, Button, Headline,} from 'react-native-paper';
import { yellow } from 'ansi-colors';

export default class CompScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
                    <Appbar.BackAction
                    onPress={() => navigate('Home')}
                    />
                    <Appbar.Content
                    title="NIT PREP GURU"
                    subtitle="The Placement Preparation Tool"
                    style={{}}
                    />
        </Appbar.Header>
        <Tabs >
          <Tab heading="FTE" tabStyle={{ backgroundColor: "#3BAD87" }} activeTabStyle={{ backgroundColor: "#3BAD87" }}>
            <Text>Tab1</Text>
          </Tab>
          <Tab heading="INTERN" tabStyle={{ backgroundColor: "#3BAD87" }} activeTabStyle={{ backgroundColor: "#3BAD87" }}>
            <Text>Tab2</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}