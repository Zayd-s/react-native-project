import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

export default class Profile extends Component {
  /*
  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.checkLoggedIn();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  checkLoggedIn = async () => {
    const value = await AsyncStorage.getItem('@token');
    if (value == null) {
      this.props.navigation.navigate('Login');
    }
  };
*/

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      //password: '',
    };
  }

  //200, 401, 404, 500

  getInfo = async () => {
    let token = await AsyncStorage.getItem('@token');
    let user_id = await AsyncStorage.getItem('@userID');
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/' + user_id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'X-Authorization': token},
    })
      .then((response) => {
        if (response.status === 200) {
          //Alert.alert(this.state.first_name);
          return response.json();
        } else if (response.status === 401) {
          console.error('Could not ');
        } else if (response.status === 404) {
          console.error('Not found');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          console.error('Error');
        }
      })

      .then((responseJson) => {
        this.setState({
          first_name: responseJson.first_name,
          last_name: responseJson.last_name,
          email: responseJson.email,
        });
      })

      .catch((error) => {
        Alert.alert('Error');
        console.error(error);
      });
  };

  componentDidMount() {
    this.getInfo();
  }

  postLogout = async () => {
    let token = await AsyncStorage.getItem('@token');
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'X-Authorization': token},
    })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert('Successfully logged out');
          this.props.navigation.navigate('Login');
        } else if (response.status === 401) {
          console.error('Unauthorised');
        } else if (response.status === 500) {
          console.error('Server error');
        } else {
          console.error('Error');
        }
      })

      .catch((error) => {
        //Alert.alert('Could not log in');
        console.error(error);
      });
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.Header}></View>
        <Image
          style={styles.ProfileImage}
          source={{
            uri:
              'https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg',
          }}
        />
        <View style={styles.Profile}>
          <View style={styles.ProfileText}>
            <Text style={styles.Name}>
              {this.state.first_name} {this.state.last_name}
            </Text>
            <Text style={styles.Email}>{this.state.email}</Text>

            <TouchableOpacity
              style={styles.EditProfileButton}
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.TextEditProfile}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.postLogout()}
              style={styles.LogoutButton}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#f08200',
    height: 125,
  },
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: 'white',
    marginBottom: 30,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 55,
  },
  Profile: {
    marginTop: 60,
  },
  ProfileText: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  Name: {
    fontSize: 24,
    //color: "#696969",
    fontWeight: 'bold',
  },
  Email: {
    //fontSize:16,
    color: '#808080',
    marginTop: 10,
  },
  TextEditProfile: {
    color: 'white',
    fontWeight: 'bold',
  },
  EditProfileButton: {
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#f08200',
  },
  LogoutButton: {
    marginTop: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#dfdfdf',
  },
});
