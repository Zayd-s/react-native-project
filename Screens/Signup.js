import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  postUser() {
    return fetch('http://10.0.2.2:3333/api/1.0.0/user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          Alert.alert('Successfully registered!');
          this.props.navigation.navigate('Login');
        } else if (response.status === 400) {
          console.error('Could not sign up');
        } else if (response.status === 500) {
          console.error('Could not sign up');
        } else {
          console.error('Could not sign up');
        }
      })
      .catch((error) => {
        Alert.alert('Could not sign up');
        console.error(error);
      });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.CreateAcc}>Create an account for</Text>
          <Text style={styles.COFFIDA}>COFFIDA </Text>
        </View>

        <TextInput
          onChangeText={(first_name) => this.setState({first_name})}
          value={this.state.first_name}
          style={styles.NameBox}
          placeholder="First Name"></TextInput>

        <TextInput
          onChangeText={(last_name) => this.setState({last_name})}
          value={this.state.last_name}
          style={styles.LastNameBox}
          placeholder="Last Name"></TextInput>

        <TextInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          style={styles.EmailBox}
          placeholder="Email"></TextInput>

        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          style={styles.PasswordBox}
          placeholder="Password"></TextInput>

        <TouchableOpacity
          onPress={() => this.postUser()}
          style={styles.SignupBox}>
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
