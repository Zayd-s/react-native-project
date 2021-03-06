import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ReviewsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Title}>Add a review</Text>
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
