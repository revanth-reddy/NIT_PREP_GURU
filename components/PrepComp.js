import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {withNavigation} from 'react-navigation';
import axios from 'react-native-axios';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

class PrepComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isLoading: true,
      index: 0,
      dataSource: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios({
      method: 'get',
      url: 'http://13.59.111.72/companies/',
      auth: {
        username: 'admin',
        password: 'admin123',
      },
    })
      .then(response => {
        let ob = [];
        for (let comp of response.data) {
          ob.push({
            company: comp.name,
          });
        }
        // console.log(ob);
        this.setState({
          isLoading: false,
          dataSource: ob,
          refreshing: false,
        });
      })
      .catch(error => {
        console.error('hello - ' + error);
      });
  }

  _renderItem({item, index}) {
    // console.log(item.company);
    return (
      <View style={{elevation: 20}}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            this.props.navigation.navigate('Comp', {title: item.company})
          }>
          <Text style={{fontSize: 30}}>{item.company}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onRefresh() {
    this.setState(
      {
        refreshing: true,
        isLoading: true,
      },
      () => {
        this.getData();
      },
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{marginTop: 20}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Carousel
          ref={ref => (this.carousel = ref)}
          data={this.state.dataSource}
          sliderWidth={screenWidth}
          sliderHeight={screenHeight * 0.8}
          itemWidth={screenWidth - 60}
          vertical={true}
          firstItem={1}
          activeSlideOffset={50}
          enableMomentum={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          itemHeight={screenHeight / 4}
          renderItem={this._renderItem.bind(this)}
        />
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
export default withNavigation(PrepComp);
