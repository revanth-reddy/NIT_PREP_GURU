import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import PrepComp from '../components/PrepComp';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

class Prep extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  render() {
    console.log(this.state.title);
    return (
      <View>
        <StatusBar backgroundColor="#3B3B3B" />
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
            alignItems: 'center',
            backgroundColor: '#3BAD87',
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25}}>Companies</Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <PrepComp onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default Prep;
