import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  postLogin = async () => {
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert('Successfully logged in');
          return response.json();
        } else if (response.status === 400) {
          console.error('Invalid email or password');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          console.error('Error');
        }
      })
      .then(async (responseJson) => {
        await AsyncStorage.setItem('@token', responseJson.token);
        await AsyncStorage.setItem('@userID', responseJson.id.toString());
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        //Alert.alert('Could not log in');
        console.error(error);
      });
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height: 100}}>
          <Image
            style={styles.CoffeePic}
            resizeMode="cover"
            source={{
              uri:
                'https://www.pngkey.com/png/full/22-225874_coffee-logo-png-vector-cafe.png',
            }}
          />
        </View>

        <Text style={styles.WelcomeTo}>Welcome to</Text>
        <Text style={styles.WelcomeToCoffida}>CoffiDa</Text>

        <TextInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          style={styles.EmailBox}
          placeholder="Email"></TextInput>

        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          style={styles.PasswordBox}
          secureTextEntry
          placeholder="Password"></TextInput>

        <TouchableOpacity
          onPress={() => this.postLogin()}
          style={styles.LoginBox}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.SignupText}>
          Don't have an account?{' '}
          <Text
            style={styles.SignupText2}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    top: -50,
  },
  CoffeePic: {
    width: 150,
    height: 160,
    bottom: 80,
    alignSelf: 'center',
  },
  WelcomeTo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: -10,
  },
  WelcomeToCoffida: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: -15,
  },
  EmailBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
  },
  PasswordBox: {
    backgroundColor: '#dfdfdf',
    padding: 5,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: 25,
  },
  LoginBox: {
    backgroundColor: '#f08200',
    padding: 10,
    alignSelf: 'center',
    width: '75%',
    borderRadius: 10,
    top: 50,
    alignItems: 'center',
  },
  LoginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  SignupText: {
    alignSelf: 'center',
    top: 100,
  },
  SignupText2: {
    fontWeight: 'bold',
    color: '#f08200',
  },
  Skipbutton: {
    backgroundColor: '#f08200',
    height: 35,
    width: '45%',
    borderRadius: 20,
    paddingVertical: 4,
    alignSelf: 'center',
    alignItems: 'center',
    top: 150,
  },
  SkipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;
