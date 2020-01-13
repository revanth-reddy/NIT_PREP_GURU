import React from 'react';
import axios from "react-native-axios";
import { Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Divider } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://13.59.111.72/news/",
      auth: {
        username: "admin",
        password: "admin123"
      }
    })
      .then(response => {
        let ob = [];
        for (let q of response.data) {
          ob.push({
            news: q.news,
            link: q.link
          });
        }
        // console.log(ob);
        this.setState({
          dataSource: ob,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error("hello - " + error);
      });
  }

  render() {
    if(this.state.isLoading)
      return(
        <ActivityIndicator size="large" />
      )
    return (
        <View>
            {
                this.state.dataSource.map(( item, key ) =>
                (
                    <TouchableOpacity key = { key } onPress={()=>{Linking.openURL(item.link);}}>
                        <Divider />
                            <Text style={{marginTop:10,marginBottom: 10}}>{ item.news }</Text>
                        <Divider />
                    </TouchableOpacity>
                ))
            }
        </View>
        
    );
  }
}


export default News;
