import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity} from 'react-native'

class HomeScreen extends Component{
  render(){
    const navigation = this.props.navigation;

    return(
    
    <SafeAreaView style={styles.container}>

    <SafeAreaView style={ styles.HorizontalScroll}>
      <Text style={styles.Pic1Title}>
        Top-rated Cafés
      </Text>
      <ScrollView horizontal>

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
    </SafeAreaView>

    <SafeAreaView style={ styles.HorizontalScroll}>
      <Text style={styles.Pic1Title}>
        New Cafés
      </Text>
      <ScrollView horizontal>

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
          onPress={() => navigation.navigate('Location1')}>
          <Text style={{alignSelf: "center"}}>
          Paterissie Julie
          </Text>
          <Image style={ styles.Shop1 }
            resizeMode="cover"
            source={{ uri: 'https://static.dezeen.com/uploads/2017/08/daodaocoffee-HAD-architects-and-EPOS-interiors_dezeen_hero-3.jpg'}}/>
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
    </SafeAreaView>

    </SafeAreaView>

    )
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
    fontWeight: "bold",
    alignSelf: "center",
    top: -10,

  },
  HorizontalScroll:{
    marginTop: 40,
    flex: 0.4,
  },
  Shop1: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  Shop2: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  Shop3: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  }
  
});