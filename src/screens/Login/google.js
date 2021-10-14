// import { useState } from 'react';
import * as Google from "expo-google-app-auth";
import React, { useState } from 'react';
import { Button, View, StyleSheet, Text , ActivityIndicator} from "react-native";
import Home from "../Home/Home";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';


// import  from 'react-native'
 
const LoginScreen = ({ }) => {
  const [isLoading,setisLoading] = useState(false)

  console.log(axios.defaults.baseURL)
  const navigation = useNavigation();
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        //   iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `273502717227-cusghsv9v26kssp608qmm7ojrhrj8tiv.apps.googleusercontent.com`,
      });

      if (type === "success") {
        setisLoading(true)
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to Home Screen");
        console.log(user)
        axios.post("/user/login",{
          email: user.email,
          name: user.name
        })
        .then(res=>{
          console.log(res.data.msg)
          console.log(res.data.data[0].token)
          SecureStore.setItemAsync("token",res.data.data[0].token)
          .then(()=>{
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data[0].token}`;
            navigation.navigate("App")
            setisLoading(false)
          })
          
        })
        .catch(err=>{
            console.log(err)
            setisLoading(false)

        })
      }
    } catch (error) {
      console.log(" Successfully Login", error);
    }
    
  };

  return (
    <View style={{backgroundColor: "black",flexGrow:1, width:"100%"}} >
      <View style={styles.wrt}>
        <Text style={{ color: "grey" , fontSize: 25,textAlign:"center"}}>
          Sign In Using: 👇 
        </Text>
      </View>
      <View style={styles.buton}>
        <Button  title="Google" onPress={signInAsync} />
      </View>
      {
        isLoading
        &&
        <ActivityIndicator  size="large" color="#16A085" />
      }
        
    </View>
  );
};

const styles = StyleSheet.create({
  buton:
  {
    // width: 180,
    // marginHorizontal: 120,
    marginVertical: 50,
    alignItems:"center"
  },
  wrt:
  {
    marginTop: 50 
  }
})
export default LoginScreen;