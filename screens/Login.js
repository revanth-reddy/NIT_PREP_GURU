import React, {useState, Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }

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
      console.log("navigate")
      this.props.navigation.navigate('App');
    } catch (error) {
      console.log(error);
    }
  };

render(){
  return (
    <View style={styles.viewStyles}>
      <ImageBackground
        source={require('../assets/login_background.jpg')}
        style={styles.background}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={this.state.email}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={newValue => {
            this.setState({
              email:newValue
            })
          }}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
          onChangeText={newValue => {
            this.setState({
              password: newValue
            })
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <GoogleSigninButton
                style={{
                  width: 180,
                  height: 50,
                  // marginBottom: 10,
                  // opacity: 1,
                  position: 'absolute',
                  bottom: 150
                }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={this._signInGoogle}
              />
      </ImageBackground>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    bottom: 20,
    height: 50,
    width: 300,
    borderWidth: 1,
    margin: 15,
    borderColor: '#fff',
    fontSize: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    color: '#fff',
  },
  button: {
    bottom: 20,
    height: 50,
    width: 300,
    borderWidth: 1,
    margin: 15,
    fontSize: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;
