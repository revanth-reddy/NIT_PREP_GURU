import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Appbar, Divider} from 'react-native-paper';
import {LoginManager} from 'react-native-fbsdk';

const windowwidth = Dimensions.get('window').width;

class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
    };
  }
  componentDidMount(){
    if(global.user_name==null)
    {
      console.log('no user');
    }
    else
    {
      // console.log('user is there !');
      this.setState({loggedin: true});
    }
  }

  Logout = () => {
    LoginManager.logOut();
    global.user_name = null;
    global.user_photo = '';
    global.user_email = '';
    global.user_data = '';
    // console.log('logout');
    this.setState({loggedin: false});
    // console.log(this.state.loggedin);
  };

  render() {
    const {navigate} = this.props.navigation;
    // console.log(global.user_name);
    if (this.state.loggedin) {
      return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
          <View>
            <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
              <Appbar.Content
                title="Dronacharya"
                subtitle="The Placement Preparation Tool"
                style={{alignItems: 'center'}}
              />
            </Appbar.Header>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image source={{uri: global.user_photo}} style={styles.image} />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                width: (windowwidth * 3) / 4,
              }}>
              <Text style={styles.username}>{global.user_name}</Text>
            </View>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigate('Help')}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Contribute !
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
              Linking.openURL('mailto:revanth@ccanitd.in')
            }}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Have an Issue?
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
              Linking.openURL("market://details?id=com.dronacharya");
           }}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Please Rate us
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FAQ')}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Faqs
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.Logout()}>
              <Text style={{fontSize: 20, marginBottom: 50, marginTop: 20}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View style={{alignItems: 'center', marginBottom: 40}}>
              <Text style={{fontWeight: 'bold'}}> Made with 💙 by </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 10,
              }}>
              <Image
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/30077154?s=460&v=4',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderColor: 'black',
                  borderRadius: 20,
                }}
              />

              <Image
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/40210064?s=460&v=4',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderColor: 'black',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
          <View>
            <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
              <Appbar.Content
                title="Dronacharya"
                subtitle="The Placement Preparation Tool"
                style={{alignItems: 'center'}}
              />
            </Appbar.Header>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image source={require('../assets/user.png')} style={styles.image} />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                width: (windowwidth * 3) / 4,
              }}>
              <Text style={styles.username}>Hey Buddy !</Text>
              <Text style={{textAlign: 'center'}}>
                Please login to see your name here
              </Text>
            </View>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
                Linking.openURL('mailto:revanth@ccanitd.in')
            }}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Have an Issue?
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
                Linking.openURL("market://details?id=com.dronacharya");
            }}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Please Rate us
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FAQ')}>
              <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>
                Faqs
              </Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{
              height: 1,
              marginLeft: windowwidth / 25,
              marginRight: windowwidth / 25,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.replace('Login')}>
              <Text style={{fontSize: 20, marginBottom: 50, marginTop: 20}}>
                Login !
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View style={{alignItems: 'center', marginBottom: 40}}>
              <Text style={{fontWeight: 'bold'}}> Made with 💙 by </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/30077154?s=460&v=4',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderColor: 'black',
                  borderRadius: 20,
                }}
              />

              <Image
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/40210064?s=460&v=4',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderColor: 'black',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: windowwidth / 4,
    height: windowwidth / 4,
    borderRadius: windowwidth / 4,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    // position:"absolute",
    // top: 10,
    // left:10
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default SettingsScreen;
