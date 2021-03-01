import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import SignupScreen from './Screens/Signup'
import ProfileScreen from './Screens/Profile'
import LocationsScreen from './Screens/Locations'
import ReviewsScreen from './Screens/Reviews'

const Stack = createStackNavigator();


class App extends Component{
  render(){
    return(
      <NavigationContainer>

        <Stack.Navigator /*initialRouteName="Get started!"*/ screenOptions={{headerTitleAlign: 'center' /*, title: 'Overview'*/ }}>
          <Stack.Screen 
            name="Login" component={LoginScreen} 
            options={{header: () => null}}
            /*options={{ title: 'Overview' }} */ />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen 
            name="Signup" component={SignupScreen}
            options={{header: () => null}} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Locations" component={LocationsScreen} />
          <Stack.Screen name="Reviews" component={ReviewsScreen} />

        </Stack.Navigator>

      </NavigationContainer>)
  }
}

export default App;


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