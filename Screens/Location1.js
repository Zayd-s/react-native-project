import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Stars from 'react-native-stars';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
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
    };
  }

  getLocationDetails = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch(
      'http://10.0.2.2:3333/api/1.0.0/location/' + this.state.location_id,
      {
        method: 'get',
        headers: {
          'x-authorization': token,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(' in');
          return response.json();
        } else {
          console.log('not in');
          throw 'Somthing went wrong';
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

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getLocationDetails();
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

            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={30} color="grey" />
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
                <Text style={styles.formLabel}>Over All Rating:</Text>

                <Stars
                  display={item.overall_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text style={styles.formLabel}>Price Rating:</Text>

                <Stars
                  display={item.price_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text style={styles.formLabel}>Quality Rating:</Text>

                <Stars
                  display={item.quality_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text style={styles.formLabel}>Cleanliness Rating:</Text>
                <Stars
                  display={item.clenliness_rating}
                  spacing={5}
                  starSize={25}
                  count={5}
                />

                <Text style={styles.formLabel}>Review Body:</Text>
                <Text style={styles.formLabel}>{item.review_body}</Text>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
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
    //padding:20,
    alignItems: 'center',
    backgroundColor: '#f08200',
  },
  ImageCafe1: {
    //width: 400,
    width: '100%',
    height: 200,
    //flex: 1,
    //borderRadius: 15,
    //margin: 10,
  },
  /*
  HeaderTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },*/
  Location1Page: {
    flex: 1,
    padding: 30,
  },
  CafeName: {
    fontSize: 24,
    fontWeight: 'bold',
    //marginLeft:50,
  },
  heartIcon: {
    paddingLeft: 125,
  },
  Description: {
    //fontSize:16,
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
    //marginTop:-5,
  },
  TextReviewTitle1: {
    color: 'black',
    //marginTop:10,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextReview1: {
    //fontSize:16,
    //marginTop:15,
    marginLeft: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
  ImageReview: {
    width: 80,
    height: 80,
    borderRadius: 15,
    //borderWidth: 4,
    //borderColor: "#808080",
  },
  /*
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
    //borderWidth: 4,
    //borderColor: "#808080",
  }, */
  Profile: {
    flexDirection: 'row',
    marginTop: 20,
  },
  /*name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, */
  AddReviewButton: {
    backgroundColor: '#f08200',
    //padding: 10,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 10,
    //marginBottom:10,
    //marginTop:20,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  TextAddReview: {
    color: 'white',
    fontWeight: 'bold',
    //fontSize:20,
  },
});
