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
} from 'react-native';

class MyReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          ToastAndroid.show('Review has been edited', ToastAndroid.SHORT);
        } else if (response.status === 400) {
          throw 'Bad request';
        } else if (response.status === 401) {
          throw 'Unauthorized';
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

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.MyReviewsText}>My Reviews</Text>
        </View>

        <View style={{height: '90%'}}>
          <FlatList
            style={{height: '100%'}}
            data={this.state.reviews}
            renderItem={({item}) => (
              <View>
                <Text>Location Name: {item.location.location_name}</Text>
                <Text>Over All Rating:</Text>
                <Stars
                  display={item.review.overall_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />
                <Text>Price Rating:</Text>
                <Stars
                  display={item.review.price_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />
                <Text>Quality Rating:</Text>
                <Stars
                  display={item.review.quality_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />
                <Text>Cleanliness Rating:</Text>
                <Stars
                  display={item.review.clenliness_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />
                <Text>Review Body:</Text>
                <Text>{item.review.review_body}</Text>
                <View>
                  {
                    //this link goes to a page called EditReview
                    // in this page i'm going to make the endpoint functionality of updating reviews.
                  }

                  <TouchableOpacity
                    onPress={() =>
                      navigate.navigate('EditReview', {
                        review_id: item.review.review_id,
                        location_id: item.location.location_id,
                      })
                    }>
                    <Text style={styles.deleteText}>Edit This Review</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.deleteReview(
                        item.review.review_id,
                        item.location.location_id,
                      ) && this.fetchInfo()
                    }>
                    <Text style={styles.deleteText}>
                      {''}
                      Delete This Review
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 10,
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.review.review_id.toString()}
          />
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
});
