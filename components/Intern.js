import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default class Intern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  render() {
    this.state.url = this.props.link;
    console.log(this.props.url);
    const items = [
      {date: '16-10-2019', desc: '#1abc9c'},
      {date: '1-1-2000', desc: '#2ecc71'},
      {date: '1-1-2000', desc: '#3498db'},
      {date: '1-1-2000', desc: '#9b59b6'},
      {date: '1-1-2000', desc: '#34495e'},
      {date: '1-1-2000', desc: '#16a085'},
      {date: '1-1-2000', desc: '#27ae60'},
      {date: '1-1-2000', desc: '#2980b9'},
      {date: '1-1-2000', desc: '#8e44ad'},
      {date: '1-1-2000', desc: '#2c3e50'},
      {date: '1-1-2000', desc: '#f1c40f'},
      {date: '1-1-2000', desc: '#e67e22'},
      {date: '1-1-2000', desc: '#e74c3c'},
      {date: '1-1-2000', desc: '#ecf0f1'},
      {date: '1-1-2000', desc: '#95a5a6'},
      {date: '1-1-2000', desc: '#f39c12'},
      {date: '1-1-2000', desc: '#d35400'},
      {date: '1-1-2000', desc: '#c0392b'},
      {date: '1-1-2000', desc: '#bdc3c7'},
      {date: '1-1-2000', desc: '#7f8c8d'},
    ];

    return (
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => alert(item.date)}
            style={[styles.itemContainer, {backgroundColor: '#34495e'}]}>
            <Text style={styles.itemName}>Date : {item.date}</Text>
            <Text style={styles.itemName}>Description : {item.desc}</Text>
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
