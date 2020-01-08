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
      <View style={{flex: 1}}>
        {this.state.visible && <ActivityIndicator size="large" />}
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{uri: 'https://revanthreddy739245.typeform.com/to/Yncxq4'}}
        />
      </View>
    );
  }
}

export default FAQ;
