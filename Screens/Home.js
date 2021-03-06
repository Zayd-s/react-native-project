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
          Best Brews
          </Text>
          <Image style={ styles.Café1 }
            resizeMode="cover"
            source={{ uri: 'https://i2-prod.manchestereveningnews.co.uk/business/property/article5908481.ece/ALTERNATES/s615b/MooseCoffeeFinal.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location2')}>
          <Text style={{alignSelf: "center"}}>
          Latte Love
          </Text>
          <Image style={ styles.Café2 }
            resizeMode="cover"
            source={{ uri: 'https://www.eclectictrends.com/wp-content/uploads/2020/01/Unmanned-coffee-shop-gacha-gacha-nendo_eclectic-trends-4.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location3')}>
          <Text style={{alignSelf: "center"}}>
          Yomo Café
          </Text>
          <Image style={ styles.Café3 }
            resizeMode="cover"
            source={{ uri: 'https://notjessfashion.com/wp-content/uploads/2018/05/la-mercerie-cafe-nyc-900x600.jpg'}}/>
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
          Latte Love
          </Text>
          <Image style={ styles.Café2 }
            resizeMode="cover"
            source={{ uri: 'https://www.eclectictrends.com/wp-content/uploads/2020/01/Unmanned-coffee-shop-gacha-gacha-nendo_eclectic-trends-4.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location1')}>
          <Text style={{alignSelf: "center"}}>
          Best Brews
          </Text>
          <Image style={ styles.Café1 }
            resizeMode="cover"
            source={{ uri: 'https://i2-prod.manchestereveningnews.co.uk/business/property/article5908481.ece/ALTERNATES/s615b/MooseCoffeeFinal.jpg'}}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Location3')}>
          <Text style={{alignSelf: "center"}}>
          Yomo Café
          </Text>
          <Image style={ styles.Café3 }
            resizeMode="cover"
            source={{ uri: 'https://notjessfashion.com/wp-content/uploads/2018/05/la-mercerie-cafe-nyc-900x600.jpg'}}/>
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
  }
  
});