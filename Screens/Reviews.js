import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Stars from 'react-native-stars';
import {
  StyleSheet,
  ToastAndroid,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

class ReviewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overall_rating: 1,
      price_rating: 1,
      quality_rating: 1,
      clenliness_rating: 1,
      review_body: '',
    };
  }

  postReview = async () => {
    let id = this.props.route.params.location_id;
    let token = await AsyncStorage.getItem('@token');
    return fetch('http://10.0.2.2:3333/api/1.0.0/location/' + id + '/review', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-authorization': token,
      },
      body: JSON.stringify({
        overall_rating: parseInt(this.state.overall_rating),
        price_rating: parseInt(this.state.price_rating),
        quality_rating: parseInt(this.state.quality_rating),
        clenliness_rating: parseInt(this.state.clenliness_rating),
        review_body: this.state.review_body,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          ToastAndroid.show('Review added successfully', ToastAndroid.SHORT);
        } else if (response.status === 400) {
          throw 'Bad request';
        } else if (response.status === 401) {
          throw 'Unauthorized';
        } else if (response.status === 404) {
          throw 'Not found';
        } else {
          throw 'Somthing went wrong';
        }
      })
      .then(async (responseJson) => {})
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  profanityFilter = () => {
    let words = this.state.review_body.split(' ');
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
    return this.postReview();
  };

  render() {
    return (
      <View>
        <ScrollView>
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
            <Text>
              Review {'\n'}
              {'\n'}
            </Text>
            <TextInput
              onChangeText={(review_body) => this.setState({review_body})}
              value={this.state.review_body}
              style={styles.ReviewBox}
              placeholder="Write your review here"></TextInput>

            <TouchableOpacity
              onPress={() => this.profanityFilter()}
              style={styles.SaveChangesBox}>
              <Text style={styles.SaveChangesText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    top: 50,
    paddingHorizontal: 10,
  },
  Title: {
    top: -80,
    alignItems: 'center',
  },
  CreateReview: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 20,
  },
  ReviewText: {
    marginLeft: 45,
    fontWeight: 'bold',
    top: -25,
  },
  ReviewBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 20,
    top: -20,
    height: 100,
  },
  RatingBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 20,
    top: -20,
  },
  SaveChangesBox: {
    backgroundColor: '#f08200',
    padding: 10,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 80,
  },
  SaveChangesText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
