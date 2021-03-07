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
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.Title}>
            <Text style={styles.CreateAcc}>
              {'\n'}
              {'\n'}Add a Review
            </Text>
          </View>

          <Text style={styles.ReviewText}>Café Name</Text>
          <TextInput
            style={styles.CafeNameBox}
            placeholder="Select location"></TextInput>

          <Text style={styles.ReviewText}>Review Title</Text>
          <TextInput
            style={styles.ReviewTitleBox}
            placeholder="Review title"></TextInput>

          <Text style={styles.ReviewText}>Review</Text>
          <TextInput
            style={styles.ReviewBox}
            placeholder="Write your review here"></TextInput>

          <Text style={styles.ReviewText}>Quality</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Price</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

          <Text style={styles.ReviewText}>Cleanliness</Text>
          <TextInput
            style={styles.RatingBox}
            placeholder="Select rating"></TextInput>

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
  CreateAcc: {
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
  CafeNameBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 20,
    top: -20,
    /*
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    */
  },
  ReviewTitleBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 20,
    top: -20,
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
