import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { Appbar, Banner, Subheading, Divider } from 'react-native-paper';
import Carousal from '../components/Carousel.js';
import News from '../components/News';

class HomeScreen extends React.Component {
  state = {
    visible: true,
  };

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
        <View style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white'}}>
          <Carousal />
        </View>
        <View>
          <Banner
            visible={this.state.visible}
            actions={[
              {
                label: 'Contribute',
                onPress: () => this.setState({ visible: false }),
              },
              {
                label: 'Not Now',
                onPress: () => this.setState({ visible: false }),
              },
            ]}
            icon={({ size }) =>
              <Image
                source={require('../assets/contribute.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            }
          >
            Help others by sharing your coding round and interview experiences of FTE and interns.
          </Banner>
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
