import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Stars from 'react-native-stars';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location_id: this.props.route.params.location_id,
      location_name: '',
      location_town: '',
      latitude: '',
      longitude: '',
      photo_path: '1',
      avg_overall_rating: 1,
      avg_price_rating: 1,
      avg_quality_rating: 1,
      avg_clenliness_rating: 1,
      location_reviews: [],
      isFavourite: '',
      liked_reviews: [],
    };
  }

  getLocDetails = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' + this.state.location_id,
      {
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log('OK');
          return response.json();
        } else if (response.status === 404) {
          console.log('Not Found');
        } else {
          console.log('Server Error');
          throw 'Error';
        }
      })
      .then(async (responseJson) => {
        this.setState({location_name: responseJson.location_name});
        this.setState({location_town: responseJson.location_town});
        this.setState({latitude: responseJson.latitude});
        this.setState({longitude: responseJson.longitude});
        this.setState({photo_path: responseJson.photo_path});
        this.setState({avg_overall_rating: responseJson.avg_overall_rating});
        this.setState({avg_price_rating: responseJson.avg_price_rating});
        this.setState({avg_quality_rating: responseJson.avg_quality_rating});
        this.setState({
          avg_clenliness_rating: responseJson.avg_clenliness_rating,
        });
        this.setState({location_reviews: responseJson.location_reviews});
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  ifFavourite = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch('http://10.0.2.2:3333/api/1.0.0/find?search_in=favourite', {
      method: 'GET',
      headers: {
        'X-Authorization': token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw 'Error';
        }
      })
      .then(async (responseJson) => {
        let status = false;
        for (let i = 0; i < responseJson.length; i++) {
          if (responseJson[i].location_id === this.state.location_id) {
            status = true;
          }
        }
        this.setState({isFavourite: status});
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  //function - add location to favourites
  addFavourite = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' +
        this.state.location_id +
        '/favourite',
      {
        method: 'POST',
        headers: {
          'X-Authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log('Added to favourites');
          ToastAndroid.show('Added to favourites', ToastAndroid.show);
          this.setState({isFavourite: true});
        } else if (response.status === 400) {
          console.error('Bad request');
        } else if (response.status === 401) {
          console.error('Unauthorised');
        } else if (response.status === 404) {
          console.error('Not found');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          throw 'Error';
        }
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  //function - remove favourite location
  removeFavourite = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' +
        this.state.location_id +
        '/favourite',
      {
        method: 'DELETE',
        headers: {
          'X-Authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log('Removed from favourites');
          ToastAndroid.show('Removed from favourites', ToastAndroid.show);
          this.setState({isFavourite: false});
        } else if (response.status === 401) {
          console.error('Unauthorised');
        } else if (response.status === 403) {
          console.error('Forbidden');
        } else if (response.status === 404) {
          console.error('Not found');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          throw 'Error';
        }
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  manageFavourites = () => {
    if (this.state.isFavourite) {
      this.removeFavourite();
      this.setState({isFavourite: false});
    } else {
      this.addFavourite();
      this.setState({isFavourite: true});
    }
  };

  likeReview = async (rev_id, loc_id) => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' +
        loc_id +
        '/review/' +
        rev_id +
        '/like',
      {
        method: 'POST',
        headers: {
          'X-Authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          ToastAndroid.show('Review liked', ToastAndroid.show);
          this.getLikedReviews();
        } else if (response.status === 400) {
          console.error('Bad request');
        } else if (response.status === 401) {
          console.error('Unauthorised');
        } else if (response.status === 404) {
          console.error('Not found');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          throw 'Error';
        }
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };
  unlikeReview = async (rev_id, loc_id) => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' +
        loc_id +
        '/review/' +
        rev_id +
        '/like',
      {
        method: 'DELETE',
        headers: {
          'X-Authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          ToastAndroid.show('Review unliked', ToastAndroid.show);
          this.getLikedReviews();
        } else if (response.status === 401) {
          console.error('Bad request');
        } else if (response.status === 403) {
          console.error('Unauthorised');
        } else if (response.status === 404) {
          console.error('Not found');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          throw 'Error';
        }
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  getLikedReviews = async () => {
    let id = await AsyncStorage.getItem('@userID');
    let token = await AsyncStorage.getItem('@token');
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/' + id, {
      method: 'GET',
      headers: {
        'X-Authorization': token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw 'Error';
        }
      })
      .then(async (responseJson) => {
        this.setState({liked_reviews: responseJson.liked_reviews});
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  isLiked(rev_id) {
    let status = false;
    for (let i = 0; i < this.state.liked_reviews.length; i++) {
      if (this.state.liked_reviews[i].review.review_id === rev_id)
        status = true;
    }
    return status;
  }

  manageLiked(rev_id, loc_id) {
    if (this.isLiked(rev_id)) {
      this.unlikeReview(rev_id, loc_id);
    } else {
      this.likeReview(rev_id, loc_id);
    }
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getLocDetails();
      this.ifFavourite();
      this.getLikedReviews();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
          <ImageBackground
            style={styles.ImageCafe1}
            source={{uri: this.state.photo_path}}
          />
        </View>

        <View style={styles.Location1Page}>
          <Text style={styles.CafeName}>
            {this.state.location_name}

            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => this.manageFavourites()}>
              <Icon
                name="heart"
                size={30}
                color={this.state.isFavourite === true ? 'red' : 'grey'}
              />
            </TouchableOpacity>
          </Text>

          <Text style={styles.TextLocation1}>{this.state.location_town}</Text>

          <Text style={styles.Distance}>0.6 miles from you</Text>

          <Text style={styles.Description}>
            A lovely place to sit and enjoy a beverage during your breaks!{' '}
            {'\n'}
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Reviews', {
                location_id: this.state.location_id,
              })
            }
            style={styles.AddReviewButton}>
            <Text style={styles.TextAddReview}>Add a review</Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: '#f08200',
              borderBottomWidth: 1,
            }}
          />
          {/* here */}
          <Text style={styles.TextReviewTitle1}>{'\n'}Reviews</Text>

          <FlatList
            style={{height: '25%'}}
            data={this.state.location_reviews}
            renderItem={({item}) => (
              <View>
                <Text>Over All Rating:</Text>
                <Stars
                  display={item.overall_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text>Price Rating:</Text>

                <Stars
                  display={item.price_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text>Quality Rating:</Text>

                <Stars
                  display={item.quality_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text>Cleanliness Rating:</Text>
                <Stars
                  display={item.clenliness_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text>Review Body:</Text>
                <Text>{item.review_body}</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.manageLiked(item.review_id, this.state.location_id)
                  }>
                  <Icon
                    name="like1"
                    size={30}
                    color={
                      this.isLiked(item.review_id) === true ? 'orange' : 'grey'
                    }
                  />
                  <Text>{item.likes}</Text>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 10,
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.review_id.toString()}
          />

          <View style={{flexDirection: 'row', textAlign: 'left'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    alignItems: 'center',
    backgroundColor: '#f08200',
  },
  ImageCafe1: {
    width: '100%',
    height: 200,
  },
  Location1Page: {
    flex: 1,
    padding: 30,
  },
  CafeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  heartIcon: {
    paddingLeft: 125,
  },
  Description: {
    marginTop: 15,
  },
  TextLocation1: {
    color: '#f08200',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Distance: {
    color: '#696969',
  },
  TextReviewTitle1: {
    color: 'black',
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  AddReviewButton: {
    backgroundColor: '#f08200',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 10,
  },
  TextAddReview: {
    color: 'white',
    fontWeight: 'bold',
  },
});
