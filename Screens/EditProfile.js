import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class EditProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Title}>Edit Profile</Text>
      </View>
    );
  }
}
export default EditProfileScreen;

const styles = StyleSheet.create({
  Title: {
    //fontWeight: 'bold',
    //fontSize: 25,
  },
});
