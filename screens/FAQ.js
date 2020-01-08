import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }
  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#5a1d81'}}>
        <View style={{flex: 1, backgroundColor: '#5a1d81'}}>
          {this.state.visible && <ActivityIndicator size="large" style={{marginTop: 20}} />}
          <WebView
            onLoad={() => this.hideSpinner()}
            style={{flex: 1, backgroundColor: '#5a1d81'}}
            source={{uri: 'https://revanthreddy739245.typeform.com/to/Yncxq4'}}
          />
        </View>
      </View>
    );
  }
}

export default FAQ;
