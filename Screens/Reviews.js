import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  ToastAndroid,
  View,
  Text,
  SafeAreaView,
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
        alert('Dear user the review should only be about coffee!');
        return false;
      }
    }
    return this.postReview();
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.Title}>
            <Text style={styles.CreateReview}>
              {'\n'}
              {'\n'}Add a Review
            </Text>
          </View>

          <Text style={styles.ReviewText}>{this.state.location_id}</Text>
          <Text style={styles.ReviewText}>Overall rating</Text>
          <TextInput
            onChangeText={(overall_rating) => this.setState({overall_rating})}
            value={this.state.overall_rating}
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Price</Text>
          <TextInput
            onChangeText={(price_rating) => this.setState({price_rating})}
            value={this.state.price_rating}
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Quality</Text>
          <TextInput
            onChangeText={(quality_rating) => this.setState({quality_rating})}
            value={this.state.quality_rating}
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Clenliness</Text>
          <TextInput
            onChangeText={(clenliness_rating) =>
              this.setState({clenliness_rating})
            }
            value={this.state.clenliness_rating}
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Review</Text>
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
        </SafeAreaView>
      </ScrollView>
    );
  }
}
export default ReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
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
    //top: 40,
    alignItems: 'center',
    marginBottom: 80,
  },
  SaveChangesText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
/*
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

class ReviewsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Title}>Add a review</Text>

        <TouchableOpacity
          style={styles.Skipbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.SkipText}> Skip to Homepage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default ReviewsScreen;

const styles = StyleSheet.create({
  Title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
*/
