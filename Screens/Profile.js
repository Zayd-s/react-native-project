import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Profile extends Component {
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
        <View style={styles.Body}>
          <View style={styles.BodyText}>
            <Text style={styles.Name}>John Smith</Text>
            <Text style={styles.Email}>johnsmith@gmail.com</Text>

            <TouchableOpacity style={styles.ButtonEditProfile}>
              <Text style={styles.TextEditProfile}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.ButtonLogout}>
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
  Body: {
    marginTop: 60,
  },
  BodyText: {
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
  ButtonEditProfile: {
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
  ButtonLogout: {
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
