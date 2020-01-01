import React from 'react';
import {StyleSheet, View, Image, ScrollView, RefreshControl} from 'react-native';
import { Appbar, Banner, Subheading } from 'react-native-paper';
import Carousal from '../components/Carousel.js';
import News from '../components/News';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

class HomeScreen extends React.Component {
  state = {
    visible: true,
    refreshing: false,
  };
  
  constructor(properties) {
    super(properties);
    OneSignal.init("f42c3b1f-1f11-429f-84ea-6056239d3fe7");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    }, this.forceUpdate());
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
      }>
        <View >
          <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
            <Appbar.Content
              title="Dronacharya"
              subtitle="The Placement Preparation Tool"
              style={{alignItems: "center"}}
            />
          </Appbar.Header>
        </View>
        <View style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white'}}>
          <Carousal />
        </View>
        <View style={styles.news}>
            <Subheading style={{fontWeight: 'bold'}}>Latest News</Subheading>      
            <News/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f6f5'
  },
  news: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  }
});

export default HomeScreen;
