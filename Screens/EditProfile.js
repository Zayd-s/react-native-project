import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      first_nameNew: '',
      last_nameNew: '',
      emailNew: '',
      passwordNew: '',
    };
  }

  //200, 401, 404, 500

  patchInfo = async () => {
    const {first_name, last_name, email, password} = this.props.route.params;
    let to_send = {};

    if (this.state.first_nameNew != first_name) {
      to_send['first_name'] = this.state.first_nameNew;
    }

    if (this.state.last_nameNew != last_name) {
      to_send['last_name'] = this.state.last_nameNew;
    }

    if (this.state.emailNew != email) {
      to_send['email'] = this.state.emailNew;
    }

    if (this.state.passwordNew != password) {
      to_send['password'] = this.state.passwordNew;
    }

    let token = await AsyncStorage.getItem('@token');
    let user_id = await AsyncStorage.getItem('@userID');
    console.log(to_send);
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/' + user_id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', 'X-Authorization': token},
      body: JSON.stringify(to_send),
    }).then((response) => {
      if (response.status === 200) {
        Alert.alert('Information updated');
        //return response.json();
      } else if (response.status === 400) {
        console.error('Bad request');
      } else if (response.status === 401) {
        console.error('Unauthorised');
      } else if (response.status === 403) {
        console.error('Forbidden');
      } else if (response.status === 404) {
        console.error('Not found');
      } else if (response.status === 500) {
        console.error('Server error');
      } else {
        console.error('Error');
      }
    });

    /*
      .then((responseJson) => {
        this.setState({
          first_name: responseJson.first_name,
          last_name: responseJson.last_name,
          email: responseJson.email,
        });
      });
      */
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.CreateAcc}>Edit Profile</Text>
        </View>

        <TextInput
          onChangeText={(first_nameNew) => this.setState({first_nameNew})}
          value={this.state.first_nameNew}
          style={styles.NameBox}
          placeholder="First Name"></TextInput>

        <TextInput
          onChangeText={(last_nameNew) => this.setState({last_nameNew})}
          value={this.state.last_nameNew}
          style={styles.LastNameBox}
          placeholder="Last Name"></TextInput>
        <TextInput
          onChangeText={(emailNew) => this.setState({emailNew})}
          value={this.state.emailNew}
          style={styles.EmailBox}
          placeholder="Email"></TextInput>
        <TextInput
          onChangeText={(passwordNew) => this.setState({passwordNew})}
          value={this.state.passwordNew}
          style={styles.PasswordBox}
          secureTextEntry
          placeholder="Password"></TextInput>
        <TouchableOpacity
          onPress={() => this.patchInfo()}
          style={styles.SignupBox}>
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
