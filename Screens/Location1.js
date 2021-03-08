import React, {Component} from 'react';
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
                  'https://i2-prod.manchestereveningnews.co.uk/business/property/article5908481.ece/ALTERNATES/s615b/MooseCoffeeFinal.jpg',
              }}
            />
          </View>

          <View style={styles.Location1Page}>
            <Text style={styles.CafeName}>Best Brews</Text>

            <Text style={styles.TextLocation1}>Manchester, UK</Text>

            <Text style={styles.Distance}>0.6 miles from you</Text>

            <Text style={styles.Description}>
              I've tried so many coffee drinks from different cafés but Best
              Brews has the best ones ever! I ordered one of their cappuccinos
              this morning and it was great! Wish they had more variety but
              honestly anything you get from this café is perfect. Can't believe
              I haven't tried this place earlier. {'\n'}
            </Text>

            <View
              style={{
                borderBottomColor: '#f08200',
                borderBottomWidth: 1,
              }}
            />

            <Text style={styles.TextReviewTitle1}>{'\n'}Reviews</Text>

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
                I've tried so many coffee drinks from different cafés but Best
                Brews has the best ones ever! I ordered one of their cappuccinos
                this morning and it was great! Wish they had more variety but
                honestly anything you get from this café is perfect. Can't
                believe I haven't tried this place earlier.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Reviews')}
              style={styles.AddReviewButton}>
              <Text style={styles.TextAddReview}>Add a review</Text>
            </TouchableOpacity>
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
  Location1Page: {
    flex: 1,
    padding: 30,
  },
  CafeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Description: {
    //fontSize:16,
    marginTop: 15,
  },
  TextLocation1: {
    color: '#f08200',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Distance: {
    color: '#696969',
    //marginTop:-5,
  },
  TextReviewTitle1: {
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
    marginTop: 50,
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
