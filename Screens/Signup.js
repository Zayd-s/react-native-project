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
          <Text style={styles.CreateAcc}>Create an account for</Text>
          <Text style={styles.COFFIDA}>COFFIDA </Text>
        </View>

        <TextInput style={styles.NameBox} placeholder="First Name"></TextInput>

        <TextInput
          style={styles.LastNameBox}
          placeholder="Last Name"></TextInput>

        <TextInput style={styles.EmailBox} placeholder="Email"></TextInput>

        <TextInput
          style={styles.PasswordBox}
          placeholder="Password"></TextInput>

        <TouchableOpacity style={styles.SignupBox}>
          <Text style={styles.SignupText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.LoginText}>
          Already have an account?{' '}
          <Text
            style={styles.LoginText2}
            onPress={() => navigation.navigate('Login')}>
            Log in
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.Skipbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.SkipText}> Skip to Homepage</Text>
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
    //top: -120,
    fontWeight: 'bold',
    fontSize: 25,
  },
  COFFIDA: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  NameBox: {
    backgroundColor: '#dfdfdf',
    //height: 35,
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: -40,
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
  SignupText: {
    color: 'white',
    fontWeight: 'bold',
  },
  LoginText: {
    top: 80,
  },
  LoginText2: {
    fontWeight: 'bold',
    color: '#f08200',
  },
  Skipbutton: {
    backgroundColor: '#f08200',
    //borderwidth : 1,
    height: 35,
    width: '45%',
    borderRadius: 20,
    paddingVertical: 4,
    alignSelf: 'center',
    alignItems: 'center',
    top: 120,
  },
  SkipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
