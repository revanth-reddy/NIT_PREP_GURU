import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import PrepComp from '../components/PrepComp';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

class Prep extends React.Component {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#3B3B3B" />
        <View style={styles.container}>
          <View style={{width: screenWidth}}>
            <PrepComp company="Company" desc="Description" date="Date" />
            <PrepComp />
            <PrepComp />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Prep;