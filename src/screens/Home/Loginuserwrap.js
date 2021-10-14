import React from 'react';
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profscreen from "./profile/hprofile"
import Log from "../Login/google"

const Stack = createNativeStackNavigator();

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Profscreen />
        </View>
    );
}
function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Log />
        </View>
    );
}

function LoginuserWrap() {
    return (
        <Stack.Navigator initialRouteName="Prof" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Prof" component={ProfileScreen} />
            <Stack.Screen name="Logi" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default LoginuserWrap;