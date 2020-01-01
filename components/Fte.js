import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import axios from 'react-native-axios';
import {Title, Subheading} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import AnimatedLoader from 'react-native-animated-loader';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
class Fte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isLoading: true,
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
      url: `${this.state.url}`,
      auth: {
        username: 'admin',
        password: 'admin123',
      },
    })
      .then(response => {
        let ob = [];
        for (let data of response.data) {
          ob.push({
            company: data.name,
            job_title: data.job_title,
            year: data.year,
            experience: data.experience,
            problems: data.problems,
            college: data.college,
            credits: data.credits,
          });
        }
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

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
        isLoading: true,
      },
      () => {
        this.getData();
      },
    );
  };

  render() {
    const randomRgb = () => {
      const red = Math.floor(Math.random() * 200);
      const green = Math.floor(Math.random() * 200);
      const blue = Math.floor(Math.random() * 200);
      return `rgb(${red}, ${green}, ${blue})`;
    };
    this.state.url = this.props.url;
    if (this.state.isLoading) {
      return (
        <View>
          <AnimatedLoader
            style={{width: 100, height: 100}}
            visible={true}
            overlayColor="rgba(255,255,255)"
            source={require('./loader.json')}
            animationStyle={styles.lottie}
            animationType="fade"
            speed={2}
          />
        </View>
      );
    }
    if (!this.state.isLoading && this.state.dataSource.length === 0) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh.bind(this)}
            />
          }>
          <Text>No data to show</Text>
        </ScrollView>
      );
    }

    return (
      <FlatGrid
        itemDimension={130}
        items={this.state.dataSource}
        style={styles.gridView}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[styles.itemContainer, {backgroundColor: randomRgb()}]}
            onPress={() => {
              this.props.navigation.navigate('Exp', {
                ob: item,
              });
            }}>
            <View>
              <Title style={styles.title}>Job Title :</Title>
              <Subheading style={styles.subTitle}>{item.job_title}</Subheading>
            </View>
            <View>
              <Title style={styles.title}>Year :</Title>
              <Subheading style={styles.subTitle}>{item.year}</Subheading>
            </View>
            <View>
              <Title style={styles.title}>College :</Title>
              <Subheading style={styles.subTitle}>{item.college}</Subheading>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 15,
    padding: 15,
    height: 250,
    width: screenWidth * 0.46,
    elevation: 20,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 10,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default withNavigation(Fte);
