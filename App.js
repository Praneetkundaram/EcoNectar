// import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-ionicons'
import home from 'react-native-ionicons'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeWrap from './src/screens/Home/HomeWrapper'
import Don from './src/screens/Donate/donation'
import Login from './src/screens/Login/Login'
import SignUp from './src/screens/SignUp/SignUp'
import blog from './src/screens/Home/blogs/blog1';
// import Home from './src/screens/Home/Home'
import Hom from './src/screens/Home/Home2'
import AboutUs from './src/screens/AboutUs/AboutUs'
import LoginWrap from './src/screens/Home/Loginuserwrap'
// import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import Google from './src/screens/Login/google'
// import { setStatusBarBackgroundColor } from 'expo-status-bar'
// import { color } from 'react-native-elements/dist/helpers'
// import options from 'standard/options'
// import { fonts } from './assets/fonts'
import AppWrapp from "./AppWrapper"
import Prof from "./src/screens/Home/profile/hprofile"
import Screen from "./SplashConfirm"
import axios from 'axios';
import {
  BaseUrl
} from "./src/Utils/BaseApi"

const Bottom = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

axios.defaults.baseURL =     BaseUrl;
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Screen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen component={AppWrapp} name="App" />
        <Stack.Screen component={Google} name="Login" />
        <Stack.Screen component={Screen} name="Screen" />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

