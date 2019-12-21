import React from 'react';
import axios from "react-native-axios";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

class Carousal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title:"Item 1"
        },
        {
            title:"Item 2"
        },
        {
            title:"Item 3"
        },
        {
            title:"Item 4"
        },
        {
            title:"Item 5"
        }
      ],
      dataSource: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://52.66.210.173/slideshow/",
      auth: {
        username: "admin",
        password: "admin123"
      }
    })
      .then(response => {
        let ob = [];
        for (let image of response.data) {
          ob.push({
            thumbnail: image.image,
            link: image.slide_link
          });
        }
        //console.log(ob);
        this.setState({
          isLoading: false,
          dataSource: ob
        });
      })
      .catch(error => {
        console.error("hello - " + error);
      });
  }

  _renderItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item.thumbnail }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
        </View>
    );
}

  render() {
    return (
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth/2}
        itemWidth={screenWidth - 60}
        data={this.state.dataSource}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenHeight/4 +10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})

export default Carousal;
