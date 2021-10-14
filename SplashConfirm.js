import React, { useEffect } from "react"
import { View, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SplashImage from "./assets/SplashScreens/EcoNectar-logos_transparent.png"
import * as SecureStore from 'expo-secure-store';
import axios from "axios";


const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        // await SecureStore.setItemAsync("token", "abc");
        
            const token =  SecureStore.getItemAsync("token");
            token.then(res=> {
                console.log(!res)
                if (!res)
                {
                    navigation.navigate("Login")
                }
                else{
                    axios.defaults.headers.common['Authorization'] = `Bearer ${res}`;
                    navigation.navigate("App")
                    console.log(res)

                }
            })
            // console.log(token);
        
    }, [])
    return (
        <View>
            <Image source={SplashImage} style={{ resizeMode: "contain", width: "100%", marginTop: -180, backgroundColor: "black" }} />
        </View>
    )
}
export default SplashScreen

// "splash": {
//     "image": "./assets/splash.png",
//     "backgroundColor": "#000000",
//     "resizeMode": "contain"

//   },