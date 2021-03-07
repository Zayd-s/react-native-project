import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class SignupScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.CreateAcc}>Edit Profile</Text>
        </View>

        <TextInput style={styles.NameBox} placeholder="First Name"></TextInput>

        <TextInput
          style={styles.LastNameBox}
          placeholder="Last Name"></TextInput>
        <TextInput style={styles.EmailBox} placeholder="Email"></TextInput>
        <TextInput
          style={styles.PasswordBox}
          secureTextEntry
          placeholder="Password"></TextInput>
        <TouchableOpacity style={styles.SignupBox}>
          <Text style={styles.SignupText}>Save Changes</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default SignupScreen;

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
  CreateAcc: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 20,
  },
  NameBox: {
    backgroundColor: '#dfdfdf',
    //height: 35,
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: -40,
    /*
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    */
  },
  EditBox: {
    backgroundColor: '#696969',
    padding: 10,
    alignSelf: 'center',
    width: '15%',
    borderRadius: 10,
    top: -40,
    alignItems: 'center',
  },
  LastNameBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: -20,
  },
  EmailBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    //top: ,
  },
  PasswordBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: 20,
  },
  SignupBox: {
    backgroundColor: '#f08200',
    padding: 10,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: 40,
    alignItems: 'center',
  },
  EditText: {
    color: 'white',
    fontWeight: 'bold',
  },
  SignupText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
