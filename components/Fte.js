import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import axios from 'react-native-axios';

export default class Fte extends Component {
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
      },
      () => {
        this.getData();
      },
    );
  };

  render() {
    this.state.url = this.props.url;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    if (!this.state.isLoading && this.state.dataSource.length === 0) {
      return (
        <View>
          <Text>No data to show</Text>
        </View>
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
            style={[styles.itemContainer, {backgroundColor: '#34495e'}]}>
            <Text style={styles.itemName}>Job Title : {item.job_title}</Text>
            <Text style={styles.itemName}>Year : {item.year}</Text>
            <Text style={styles.itemName}>College : {item.college}</Text>
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
    borderRadius: 10,
    padding: 10,
    height: 200,
    elevation: 20,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
