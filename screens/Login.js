import React, {useState, Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import { Paragraph, Title } from 'react-native-paper';

GoogleSignin.configure();

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.setState({name: result.name, pic: result.picture.data.url});
      global.user_name = this.state.name;
      global.user_photo = this.state.pic;
    }
  };

  _signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      console.log(result);
      // this.setState({
      //   signedIn: true,
      //   name: result.user.name,
      //   photoUrl: result.user.photo,
      // });
      global.user_name = result.user.name;
      global.user_photo = result.user.photo || {imagegif};
      global.user_email = result.user.email || ' ';
      global.user_data = '';

      //console.log(result.accessToken);
      googletoken = result.user.id;
      // console.log(googletoken);
      console.log('navigate');
      this.props.navigation.navigate('App');
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log(AccessToken);
    AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        global.fb = true;
        this.gotoHompage();
      }
    });
  }

  gotoHompage(accessToken) {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture',
      null,
      this._responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Title style={{fontSize: 30,marginBottom: 10}}>
          Hi there!.
        </Title>
        <View style={{justifyContent: 'center', alignContent: 'center', width: windowwidth * 0.8 , margin: 10, flexDirection: 'row' }}>
        <Text style={{fontSize: 14}}>
          Sign-In for hassle free experience
        </Text>
        </View>
        <View style={{width: windowwidth * 0.8, height: 50, justifyContent: 'center', margin: 20}}>
        <GoogleSigninButton
            style={{
              width: windowwidth * 0.8,
              flex: 1,
              maxHeight: 50,
              // marginBottom: 10,
              // opacity: 1,
            }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this._signInGoogle}
          />
        </View>
        <Text style={{fontFamily: 'bold', color: '#000'}}>OR</Text>
        <View style={{width: windowwidth * 0.8, height: 50, justifyContent: 'center', backgroundColor: '#4267B2', elevation: 10, margin: 10, borderRadius: 5}}>
        <LoginButton
          style={{width: windowwidth * 0.8, maxHeight: 30, flex: 1, backgroundColor: '#4267B2',}}
            publishPermissions={['publish_actions']}
            readPermissions={['public_profile']}
            onLoginFinished={(error, result) => {
              if (error) {
                console.log(error);
              } else if (result.isCancelled) {
                console.log('Login is cancelled');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  this.gotoHompage();
                });
              }
            }}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
          <Title style={{fontSize: 20,marginBottom: 10}}>
            Skip > > >
          </Title>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5F199',
  },
});

export default Login;
