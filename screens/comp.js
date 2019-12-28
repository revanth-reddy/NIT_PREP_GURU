import React, {Component, useState} from 'react';
import {StyleSheet, View, Picker, ScrollView, Alert, Text} from 'react-native';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import {Surface, Appbar, TextInput, Button, Headline} from 'react-native-paper';
import {yellow} from 'ansi-colors';
import Fte from '../components/Fte';
import Intern from '../components/Intern';

export default class CompScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      fLink: '',
      iLink: '',
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const company = JSON.parse(
      JSON.stringify(navigation.getParam('title', '')),
    );
    this.state.fLink = 'http://52.66.210.173/' + 'FTE/' + company + '/';
    this.state.iLink = 'http://52.66.210.173/' + 'INTERN/' + company + '/';
    return (
      <Container>
        <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
          <Appbar.BackAction onPress={() => navigate('Prep')} />
          <Appbar.Content title={company} style={{}} />
        </Appbar.Header>
        <Tabs>
          <Tab
            heading="FTE"
            tabStyle={{backgroundColor: '#3BAD87'}}
            activeTabStyle={{backgroundColor: '#3BAD87'}}>
            <Fte url={this.state.fLink} />
          </Tab>
          <Tab
            heading="INTERN"
            tabStyle={{backgroundColor: '#3BAD87'}}
            activeTabStyle={{backgroundColor: '#3BAD87'}}>
            <Intern url={this.state.iLink} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
