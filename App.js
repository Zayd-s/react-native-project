import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, } from '@react-navigation/drawer';
//import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import SignupScreen from './Screens/Signup'
import ProfileScreen from './Screens/Profile'
import ReviewsScreen from './Screens/Reviews'
import Location1Screen from './Screens/Location1'
import Location2Screen from './Screens/Location2'
import Location3Screen from './Screens/Location3'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

function myTabs(){
  return(
    <Tab.Navigator>
      
      <Tab.Screen name="Home" component ={HomeScreen} />
      <Tab.Screen name="Reviews" component={ReviewsScreen} />
      <Tab.Screen name="Profile" component ={ProfileScreen} />

    </Tab.Navigator>
  );
}

/*
function myDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="Home" component={HomeScreen}/>

    </Drawer.Navigator>
  );
}
*/

class App extends Component{
  render(){
    return(

      <NavigationContainer>

        <Stack.Navigator /*initialRouteName="Get started!"*/ screenOptions={{headerTitleAlign: 'center' /*, title: 'Overview'*/ }}>
          <Stack.Screen 
            name="Login" component={LoginScreen} 
            options={{header: () => null}}
            /*options={{ title: 'Overview' }} */ />
          <Stack.Screen name="Home" component={HomeScreen} component={myTabs}/>
          <Stack.Screen 
            name="Signup" component={SignupScreen}
            options={{header: () => null}} />
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Reviews" component={ReviewsScreen} />
          <Stack.Screen name="Location1" component={Location1Screen} 
          options={{title: 'Best Brews'}}/>
          <Stack.Screen name="Location2" component={Location2Screen} 
          options={{title: 'Latte Love'}}/>
          <Stack.Screen name="Location3" component={Location3Screen} 
          options={{title: 'Yomo Café'}}/>

        </Stack.Navigator>

      </NavigationContainer>

      );
  }
}

export default App;



/*
class App extends Component{
  render(){
    return(
      <NavigationContainer>

      </NavigationContainer>
    );
  }
}
*/

/*
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/

/*youtube vid
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, CreateAccount } from './Screens';

const AuthStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  </NavigationContainer>
)*/



/*import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;*/