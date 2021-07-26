import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Stars from 'react-native-stars';
import {
  ToastAndroid,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

class MyReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location_id: this.props.route.params.location_id,
      review_id: this.props.route.params.review_id,
      reviews: [],
      overall_rating: 0,
      price_rating: 0,
      quality_rating: 0,
      clenliness_rating: 0,
      review_body: '',
    };
  }

  editReview = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' +
        this.state.location_id +
        '/review/' +
        this.state.review_id,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': token,
        },
        body: JSON.stringify({
          overall_rating: parseInt(this.state.overall_rating),
          price_rating: parseInt(this.state.price_rating),
          quality_rating: parseInt(this.state.quality_rating),
          clenliness_rating: parseInt(this.state.clenliness_rating),
          review_body: this.state.review_body,
        }),
      },
    )
      .then((response) => {
        if (response.status === 200) {
          ToastAndroid.show('Your review has been edited', ToastAndroid.SHORT);
        } else if (response.status === 400) {
          throw 'Bad request';
        } else if (response.status === 401) {
          throw 'Unauthorised';
        } else if (response.status === 404) {
          throw 'Not found';
        } else {
          throw 'Error';
        }
      })
      .then(() => {
        this.props.navigation.navigate('MyReviews');
      })

      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  profanityFilter = () => {
    let words = this.state.review_body.split('');
    for (let i = 0; i < words.length; i++) {
      if (
        words[i] === 'tea' ||
        words[i] === 'cakes' ||
        words[i] === 'pastries'
      ) {
        alert('Please make sure your review is only about Coffee!');
        return false;
      }
    }
    return this.editReview();
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.MyReviewsText}>Edit your review</Text>
        </View>
        <View>
          <View>
            <Text>Overall rating:</Text>
            <View style={{alignItems: 'center'}}>
              <Stars
                half={false}
                default={1}
                update={(overall_rating) => this.setState({overall_rating})}
                spacing={5}
                starSize={25}
                count={5}
              />
            </View>
          </View>
          <View>
            <Text>Price rating:</Text>
            <View style={{alignItems: 'center'}}>
              <Stars
                half={false}
                default={1}
                update={(price_rating) => this.setState({price_rating})}
                spacing={5}
                starSize={25}
                count={5}
              />
            </View>
          </View>
          <View>
            <Text>Quality rating:</Text>
            <View style={{alignItems: 'center'}}>
              <Stars
                half={false}
                default={1}
                update={(quality_rating) => this.setState({quality_rating})}
                spacing={5}
                starSize={25}
                count={5}
              />
            </View>
          </View>
          <View>
            <Text>Clenliness rating:</Text>
            <View style={{alignItems: 'center'}}>
              <Stars
                half={false}
                default={1}
                update={(clenliness_rating) =>
                  this.setState({clenliness_rating})
                }
                spacing={5}
                starSize={25}
                count={5}
              />
            </View>
          </View>
          <View>
            <Text>Review Description:</Text>
            <TextInput
              style={styles.EmailBox}
              placeholder="Press here to type your new review description"
              onChangeText={(review_body) => this.setState({review_body})}
              value={this.state.review_body}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => this.profanityFilter()}>
              <Text style={styles.deleteText}>Edit this review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default MyReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    paddingHorizontal: 10,
  },
  Title: {
    top: -80,
    alignItems: 'center',
  },
  MyReviewsText: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  deleteText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  EmailBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
