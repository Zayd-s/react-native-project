import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class PostView extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <ImageBackground
              style={styles.ImageCafe1}
              source={{
                uri:
                  'https://www.eclectictrends.com/wp-content/uploads/2020/01/Unmanned-coffee-shop-gacha-gacha-nendo_eclectic-trends-4.jpg',
              }}
            />
          </View>

          <View style={styles.Location2Page}>
            <Text style={styles.CafeName}>
              Latte Love
              <TouchableOpacity style={styles.heartIcon}>
                <Icon name="heart" size={30} color="grey" />
              </TouchableOpacity>
            </Text>

            <Text style={styles.TextLocation2}>Birmingham, UK</Text>

            <Text style={styles.Distance}>20.4 miles from you</Text>

            <Text style={styles.Description}>
              Come join our fan favourite Café in the heart of the city. {'\n'}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Reviews')}
              style={styles.AddReviewButton}>
              <Text style={styles.TextAddReview}>Add a review</Text>
            </TouchableOpacity>

            <View
              style={{
                borderBottomColor: '#f08200',
                borderBottomWidth: 1,
              }}
            />

            <Text style={styles.TextReviewTitle2}>{'\n'}Reviews</Text>

            <View style={{flexDirection: 'row', textAlign: 'left'}}>
              <Image
                style={styles.ImageReview}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
                }}
                style={{width: 80, height: 80, borderRadius: 15}}
              />
              <Text style={styles.TextReview1}>
                I've tried so many coffee drinks from different cafés but Latte
                Love has the best ones ever! I ordered one of their cappuccinos
                this morning and it was great! Wish they had more variety but
                honestly anything you get from this café is perfect. Can't
                believe I haven't tried this place earlier.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    //padding:20,
    alignItems: 'center',
    backgroundColor: '#f08200',
  },
  ImageCafe1: {
    //width: 400,
    width: '100%',
    height: 200,
    //flex: 1,
    //borderRadius: 15,
    //margin: 10,
  },
  /*
  HeaderTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },*/
  Location2Page: {
    flex: 1,
    padding: 30,
  },
  CafeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  heartIcon: {
    paddingLeft: 125,
  },
  Description: {
    //fontSize:16,
    marginTop: 15,
  },
  TextLocation2: {
    color: '#f08200',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Distance: {
    color: '#696969',
    //marginTop:-5,
  },
  TextReviewTitle2: {
    color: 'black',
    //marginTop:10,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextReview1: {
    //fontSize:16,
    //marginTop:15,
    marginLeft: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
  ImageReview: {
    width: 80,
    height: 80,
    borderRadius: 15,
    //borderWidth: 4,
    //borderColor: "#808080",
  },
  /*
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
    //borderWidth: 4,
    //borderColor: "#808080",
  }, */
  Profile: {
    flexDirection: 'row',
    marginTop: 20,
  },
  /*name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, */
  AddReviewButton: {
    backgroundColor: '#f08200',
    //padding: 10,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    borderRadius: 10,
    marginBottom: 10,
    //marginBottom:10,
    //marginTop:20,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  TextAddReview: {
    color: 'white',
    fontWeight: 'bold',
    //fontSize:20,
  },
});
