import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  constructor(props) {
    super(props);
    this.state = {
      location_id: this.props.route.params.location_id,
    };
  }
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
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Price</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Quality</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Price</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Review</Text>
          <TextInput
            style={styles.ReviewBox}
            placeholder="Write your review here"></TextInput>

          <TouchableOpacity style={styles.SaveChangesBox}>
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
