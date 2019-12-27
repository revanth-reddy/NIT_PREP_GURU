import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class PrepComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      carouseItems: [
        {
          title: 'Item 1',
        },
        {
          title: 'Item 2',
        },
        {
          title: 'Item 3',
        },
        {
          title: 'Item 4',
        },
        {
          title: 'Item 5',
        },
        {
          title: 'Item 6',
        },
        {
          title: 'Item 7',
        },
        {
          title: 'Item 8',
        },
        {
          title: 'Item 9',
        },
        {
          title: 'Item 10',
        },
        {
          title: 'Item 11',
        },
        {
          title: 'Item 12',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={{}}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <Text style={{fontSize: 45}}>Company</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}>
          <ScrollView>
            <Text>{this.props.company}</Text>
            <Text>{this.props.desc}</Text>
            <Text>{this.props.date}</Text>
          </ScrollView>
        </Modal>
        <Carousel
          ref={ref => (this.carousel = ref)}
          data={this.state.carouseItems}
          sliderWidth={screenWidth}
          sliderHeight={screenHeight / 2 + 150}
          itemWidth={screenWidth - 60}
          vertical={true}
          itemHeight={screenHeight / 4}
          renderItem={this._renderItem.bind(this)}
        />
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
    height: screenHeight / 4,
    backgroundColor: '#3BAD87',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
