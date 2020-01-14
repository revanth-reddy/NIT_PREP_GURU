import React from 'react';
import {StyleSheet, View, Image, ScrollView, RefreshControl, BackHandler, Alert} from 'react-native';
import { Appbar, Banner, Subheading } from 'react-native-paper';
import Carousal from '../components/Carousel.js';
import News from '../components/News';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import OfflineNotice from '../components/OfflineNotice';
import NetInfo from '@react-native-community/netinfo';
import {AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';

class HomeScreen extends React.Component {
  state = {
    visible: true,
    refreshing: false,
    isConnected: true,
    connection: false,
  };
  
  constructor(properties) {
    super(properties);
    OneSignal.init("f42c3b1f-1f11-429f-84ea-6056239d3fe7");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
//      alert('Error fetching data: ' + error.toString());
    } else {
      this.setState({name: result.name, pic: result.picture.data.url});
      global.user_name = this.state.name;
      global.user_photo = this.state.pic;
    }
  };

  loadFbDetails(accessToken) {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture',
      null,
      this._responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  componentDidMount() { 
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({isConnected: state.isConnected});
      if (this.state.isConnected) {
        this.setState({connection: this.state.isConnected});
      }
      if (this.state.connection){
        AccessToken.getCurrentAccessToken().then(data => {
          if (data) {
            global.fb = true;
            this.loadFbDetails();
          }
        });
      }
    });
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      Alert.alert(
      "Exit App !",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
      );
      return true;
  }
  else
    return false;
  };
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
    if (this.state.isConnected) {
      this.setState({refreshing: true});
      setTimeout(() => {
        this.setState({refreshing: false, connection: false});
        this.setState({connection: true});
      }, this.forceUpdate());
    }
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
        <View style={{paddingTop: 15, paddingBottom: 15}}>
          <OfflineNotice />
        </View>
      { this.state.connection && <View style={{paddingTop: 10, paddingBottom: 10,}}>
          <Carousal />
        </View>}
        {this.state.connection && <View style={styles.news}>
            <Subheading style={{fontWeight: 'bold'}}>Latest News</Subheading>      
            <News/>
        </View>}

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
