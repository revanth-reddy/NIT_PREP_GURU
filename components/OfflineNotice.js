import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const { width } = Dimensions.get('window');
function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}
class OfflineNotice extends PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({isConnected: state.isConnected})
    });
  }

  // componentWillUnmount() {
  //   // NetInfo.removeEventListener('connectionChange', this.props.handleNetworkChange);
  //   NetInfo.removeEventListener(state => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);
  //   });
  // }

  // handleConnectivityChange = state => {
  //     this.setState({ isConnected: false });
  // };
  
  render() {
    
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    // top: 30
  },
  offlineText: { 
    color: '#fff'
  }
});
export default OfflineNotice;