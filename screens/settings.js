import React from 'react';
import {StyleSheet, View, ScrollView, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import { Appbar, Divider } from 'react-native-paper';


const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View >
          <Appbar.Header style={{backgroundColor: '#3BAD87'}}>
            <Appbar.Content
              title="NIT PREP GURU"
              subtitle="The Placement Preparation Tool"
              style={{alignItems: "center"}}
            />
          </Appbar.Header>
        </View>
        <View style={{flex:1, flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
          <Image source={require('../assets/logo.png')} style={styles.image} />
          <View style={{flex:1, flexDirection: "column", width: windowwidth*3/4,}}>
            <Text style={styles.username}>Sachin Tendulkar</Text>
            <Text style={{textAlign: "center",}}>sachintendulkar@india.com</Text>
          </View>
        </View>
        <Divider style={{height: 1, marginLeft: windowwidth/25, marginRight: windowwidth/25,}}/>
        <View style={{alignItems:"center"}}>
          <TouchableOpacity onPress={()=>console.log("issue !")}>
            <Text style={{fontSize: 20,  marginBottom:20,  marginTop:20}}>Have an Issue?</Text>
          </TouchableOpacity>
        </View>
        <Divider style={{height: 1, marginLeft: windowwidth/25, marginRight: windowwidth/25,}}/>
        <View style={{alignItems:"center"}}>
          <TouchableOpacity onPress={()=>console.log("issue !")}>
            <Text style={{fontSize: 20,  marginBottom:20,  marginTop:20}}>Please Rate us</Text>
          </TouchableOpacity>
        </View>
        <Divider style={{height: 1, marginLeft: windowwidth/25, marginRight: windowwidth/25,}}/>
        <View style={{alignItems:"center"}}>
          <TouchableOpacity onPress={()=>console.log("issue !")}>
            <Text style={{fontSize: 20,  marginBottom:20,  marginTop:20}}>Faqs</Text>
          </TouchableOpacity>
        </View>
        <Divider style={{height: 1, marginLeft: windowwidth/25, marginRight: windowwidth/25,}}/>
        <View style={{alignItems:"center"}}>
          <TouchableOpacity onPress={()=>console.log("issue !")}>
            <Text style={{fontSize: 20,  marginBottom:100,  marginTop:20}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
            <View style={{ alignItems: "center", marginBottom:40}}>
              <Text style={{fontWeight: "bold",}}> Made with 💙 by </Text>
            </View>
            <TouchableOpacity style={{flex:1, flexDirection: "row", justifyContent:"space-evenly",}}>

                <Image source={{uri: 'https://avatars0.githubusercontent.com/u/30077154?s=460&v=4'}} style={{width: 40, height: 40, borderColor: 'black', borderRadius: 20}} />

                <Image source={{uri: 'https://avatars0.githubusercontent.com/u/40210064?s=460&v=4'}} style={{width: 40, height: 40, borderColor: 'black', borderRadius: 20}} />

            </TouchableOpacity>
        </View>
        <View style={{height: 10000}}>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height:1000,
  },  
  image: {
    width: windowwidth/4,
    height: windowwidth/4,
    borderRadius: windowwidth/4,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginTop: 10,
    marginBottom:10,
    // position:"absolute",
    // top: 10,
    // left:10
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
  }
});

export default SettingsScreen;
