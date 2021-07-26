import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import SignupScreen from './Screens/Signup';
import ProfileScreen from './Screens/Profile';
import ReviewsScreen from './Screens/Reviews';
import Location1Screen from './Screens/Location1';
import EditProfileScreen from './Screens/EditProfile';
import MyReviewsScreen from './Screens/MyReviews';
import EditReviewScreen from './Screens/EditReview';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function myTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="My Reviews"
        component={MyReviewsScreen}
        options={{title: 'My Reviews'}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header: () => null}}
          />
          <Stack.Screen name="Home" component={HomeScreen} component={myTabs} />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{header: () => null}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="Reviews"
            component={ReviewsScreen}
            options={{title: 'Reviews'}}
          />
          <Stack.Screen
            name="Location1"
            component={Location1Screen}
            options={{title: 'Best Brews'}}
          />
          <Stack.Screen
            name="MyReviews"
            component={MyReviewsScreen}
            component={myTabs}
            options={{title: 'My Reviews'}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{title: 'Edit Profile'}}
          />
          <Stack.Screen
            name="EditReview"
            component={EditReviewScreen}
            options={{title: 'Edit Review'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
