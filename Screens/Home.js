import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
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
        'X-authorization': value,
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Location1', {
                  location_id: item.location_id,
                })
              }>
              <Image
                style={{height: 200, width: 200}}
                source={{uri: item.photo_path}}
              />
            </TouchableOpacity>
            <View>
              <Text>{item.location_name}</Text>

              <Text>{item.location_town}</Text>

              <Text>{item.avg_overall_rating}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.location_id.toString()}
      />

      /*} <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.HorizontalScroll}>
          <Text style={styles.Pic1Title}>Top-rated Cafés</Text>










          


















          <ScrollView horizontal>
            <TouchableOpacity onPress={() => navigation.navigate('Location1')}>
            s  <Text style={{alignSelf: 'center'}}>Best Brews</Text>
              <Image
                style={styles.Café1}
                resizeMode="cover"
                source={{
                  uri:
                    'https://i2-prod.manchestereveningnews.co.uk/business/property/article5908481.ece/ALTERNATES/s615b/MooseCoffeeFinal.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Location2')}>
              <Text style={{alignSelf: 'center'}}>Latte Love</Text>
              <Image
                style={styles.Café2}
                resizeMode="cover"
                source={{
                  uri:
                    'https://www.eclectictrends.com/wp-content/uploads/2020/01/Unmanned-coffee-shop-gacha-gacha-nendo_eclectic-trends-4.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Location3')}>
              <Text style={{alignSelf: 'center'}}>Yomo Café</Text>
              <Image
                style={styles.Café3}
                resizeMode="cover"
                source={{
                  uri:
                    'https://notjessfashion.com/wp-content/uploads/2018/05/la-mercerie-cafe-nyc-900x600.jpg',
                }}
              />
            </TouchableOpacity>
              </ScrollView>
        </SafeAreaView>

        <SafeAreaView style={styles.HorizontalScroll}>
          <Text style={styles.Pic1Title}>New Cafés</Text>
          <ScrollView horizontal>
            <TouchableOpacity onPress={() => navigation.navigate('Location2')}>
              <Text style={{alignSelf: 'center'}}>Latte Love</Text>
              <Image
                style={styles.Café2}
                resizeMode="cover"
                source={{
                  uri:
                    'https://www.eclectictrends.com/wp-content/uploads/2020/01/Unmanned-coffee-shop-gacha-gacha-nendo_eclectic-trends-4.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Location1')}>
              <Text style={{alignSelf: 'center'}}>Best Brews</Text>
              <Image
                style={styles.Café1}
                resizeMode="cover"
                source={{
                  uri:
                    'https://i2-prod.manchestereveningnews.co.uk/business/property/article5908481.ece/ALTERNATES/s615b/MooseCoffeeFinal.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Location3')}>
              <Text style={{alignSelf: 'center'}}>Yomo Café</Text>
              <Image
                style={styles.Café3}
                resizeMode="cover"
                source={{
                  uri:
                    'https://notjessfashion.com/wp-content/uploads/2018/05/la-mercerie-cafe-nyc-900x600.jpg',
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
              */
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 50,
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
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  Café2: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  Café3: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
});
