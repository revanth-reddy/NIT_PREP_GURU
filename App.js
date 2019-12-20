import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

import ShiftingTab, {
  FullTab
} from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  tabs = [
    {
      key: 'Home',
      icon: 'home',
      label: 'Home',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Prep',
      icon: 'library-books',
      label: 'Prep',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Settings',
      icon: 'settings',
      label: 'Settings',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  state = {
    activeTab: 'Home'
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Hello !</Text>
        </View>
        <ShiftingTab
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )
  }
}