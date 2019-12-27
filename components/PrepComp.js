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
import { ScrollView } from 'react-native-gesture-handler';

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
          <Text style={{fontSize: 20}}>Date: </Text>
          <Text style={{fontSize: 20}}>Description :</Text>
          <Text style={{fontSize: 20}}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    console.log(this.props);
    return (
      <View>
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
        <Text style={{fontSize: 25, marginTop: 15, paddingLeft: 10}}>
          {this.props.company} :{' '}
        </Text>
        <Carousel
          ref={ref => (this.carousel = ref)}
          data={this.state.carouseItems}
          sliderWidth={screenWidth}
          sliderHeight={screenHeight / 4}
          itemWidth={screenWidth - 60}
          renderItem={this._renderItem.bind(this)}
        />
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
    height: screenHeight / 4,
    backgroundColor: '#6AA6F3',
    marginTop: 15,
    borderRadius: 25,
    padding: 15,
    overflow: 'hidden',
  },
});