import Icon from 'react-native-ionicons'
import home from 'react-native-ionicons'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeWrap from './src/screens/Home/HomeWrapper'
import Don from './src/screens/Donate/donation'
import Login from './src/screens/Login/Login'
import SignUp from './src/screens/SignUp/SignUp'
import blog from './src/screens/Home/blogs/blog1';
import Hom from './src/screens/Home/Home2'
import AboutUs from './src/screens/AboutUs/AboutUs'
import LoginWrap from './src/screens/Home/Loginuserwrap'


const Bottom = createBottomTabNavigator()

export default function AppWrap ()
{
    return (
        <Bottom.Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#16A085',

                },
                headerTintColor: '#002050',
                tabBarItemStyle:
                {
                    marginBottom: 10,
                },
                // tabBarActiveTintColor: 'yellow',

                tabBarStyle: {
                    backgroundColor: 'black',
                    borderRadius: 20,
                    // borderColor:'#2A2F32',
                    margin: 5,
                    marginBottom: 10,
                    paddingVertical: 8,
                    height: 60,
                    position: 'absolute',
                    // borderTopWidth:10,
                },
            }}

        >
            <Bottom.Screen name='Home' component={HomeWrap}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('./assets/Home.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: '#009688'
                                }}

                            />
                        )
                    }

                }}
            />
            <Bottom.Screen name='About Us' component={AboutUs}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('./assets/Abou.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: '#009688'
                                }}

                            />
                        )
                    }

                }}

            />
            <Bottom.Screen name='Donations' component={Don}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('./assets/Login.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: '#009688',

                                    // backgroundColor:'green'
                                }}

                            />
                        )
                    }

                }} />
            <Bottom.Screen name='SignUp' component={LoginWrap}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('./assets/Sigma.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: '#128C7E',

                                    // backgroundColor:'green'
                                }}

                            />
                        )
                    }

                }}
            />
        </Bottom.Navigator>
    )
}
