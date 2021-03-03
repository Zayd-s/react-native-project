import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity} from 'react-native'

class HomeScreen extends Component{
  render(){
    const navigation = this.props.navigation;

    return(
    <SafeAreaView style={ styles.container}>
      <ScrollView horizontal style={ styles.HorizontalScroll }>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location1')}>
          <Text style={{alignSelf: "center"}}>
          Paterissie Julie
          </Text>
          <Image style={ styles.Shop1 }
            resizeMode="cover"
            source={{ uri: 'https://static.dezeen.com/uploads/2017/08/daodaocoffee-HAD-architects-and-EPOS-interiors_dezeen_hero-3.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location2')}>
          <Text style={{alignSelf: "center"}}>
          Café Crafts
          </Text>
          <Image style={ styles.Shop2 }
            resizeMode="cover"
            source={{ uri: 'https://www.comunicaffe.com/wp-content/uploads/2018/11/Starbucks-New-York.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location3')}>
          <Text style={{alignSelf: "center"}}>
          Hot Cups
          </Text>
          <Image style={ styles.Shop3 }
            resizeMode="cover"
            source={{ uri: 'https://cdn.shopify.com/s/files/1/2271/1033/files/105598293_4583241001701599_9188415003459821105_o.jpg?v=1598446566'}}/>
        </TouchableOpacity>

     </ScrollView>
     
     


    </SafeAreaView>)
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    //justifyContent: "center",
    //alignItems: "center",
    //paddingHorizontal: 10
    //backgroundColor: 'blue',
    //width: 250
  },
  HorizontalScroll:{
    marginTop: 40,
    //marginBot: 50,
    //flex: 1,
    //paddingLeft: 50,
  },
  Shop1: {
    width: 150,
    height: 150,
    //flex: 0.2,
    //alignSelf: "center",
    //top: 100,
    //left: 30,
    borderRadius: 15,
    margin: 10,
  },
  Shop2: {
    width: 150,
    height: 150,
    //top: 100,
    //left: 50,
    borderRadius: 15,
    margin: 10,
  },
  Shop3: {
    width: 150,
    height: 150,
    //top: 100,
    //left: 70,
    borderRadius: 15,
    margin: 10,
  }
  
});