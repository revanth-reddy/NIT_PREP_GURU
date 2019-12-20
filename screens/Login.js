import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.viewStyles}>
      <ImageBackground
        source={require('../assets/login_background.jpg')}
        style={styles.background}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={email}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={newValue => {
            setEmail(newValue);
          }}
        />
        <TextInput
          style={styles.input}
          value={password}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
          onChangeText={newValue => {
            setPassword(newValue);
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
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
