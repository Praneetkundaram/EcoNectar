import React from 'react';
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog1 from "./blogs/blog1"
import Blog2 from "./blogs/blog2"
import Blog3 from "./blogs/blog3"
import Blog4 from "./blogs/blog4"
import Blog5 from "./blogs/blog5"
import Blog6 from "./blogs/blog6"
import Hom from './Home2'
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Hom />
    </View>
  );
}

function BlogScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog1 />
      </View>
    );
  }
  function BlogScreen2() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog2 />
      </View>
    );
  }
  function BlogScreen3() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog3 />
      </View>
    );
  }
  function BlogScreen4() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog4 />
      </View>
    );
  }
  function BlogScreen5() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog5 />
      </View>
    );
  }
  function BlogScreen6() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Blog6 />
      </View>
    );
  }
function HomeWrapper() {
  return (
      <Stack.Navigator initialRouteName="Home1" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Blog2" component={BlogScreen2} />
        <Stack.Screen name="Blog3" component={BlogScreen3} />
        <Stack.Screen name="Blog4" component={BlogScreen4} />
        <Stack.Screen name="Blog5" component={BlogScreen5} />
        <Stack.Screen name="Blog6" component={BlogScreen6} />
      </Stack.Navigator>
  );
}

export default HomeWrapper;