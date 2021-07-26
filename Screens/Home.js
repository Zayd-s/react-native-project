import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Locations: [],
    };
  }

  getAllLocations = async () => {
    let value = await AsyncStorage.getItem('@token');
    return fetch('http://10.0.2.2:3333/api/1.0.0/find', {
      method: 'GET',
      headers: {
        'X-Authorization': value,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 400) {
          throw 'Unauthorized';
        } else if (response.status === 401) {
          throw 'Bad request';
        } else {
          throw 'Something went wrong';
        }
      })
      .then(async (responseJson) => {
        this.setState({Locations: responseJson});
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };
  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getAllLocations();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const navigation = this.props.navigation;

    return (
      <FlatList
        data={this.state.Locations}
        renderItem={({item}) => (
          <View>
            <Text style={styles.Pic1Title}>
              {' '}
              {'\n'} {item.location_name}
            </Text>

            <Text style={styles.Pic1Title}>{item.location_town}</Text>

            <Text style={styles.Pic1Title}>
              Average Rating: {item.avg_overall_rating}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Location1', {
                    location_id: item.location_id,
                  })
                }>
                <Image style={styles.Café1} source={{uri: item.photo_path}} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.location_id.toString()}
      />
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Pic1Title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: -10,
  },
  HorizontalScroll: {
    marginTop: 40,
    marginBottom: -30,
    flex: 0.5,
  },
  Café1: {
    width: 200,
    height: 200,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',
  },
});
