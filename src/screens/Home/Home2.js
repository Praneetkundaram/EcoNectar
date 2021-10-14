import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { HomeStyle } from './HomeStyle';
import HomeImg from "../../../assets/test3.png"
import BlockImg from "../../../assets/Pic.png"
import Pic1 from "./pics/pic5.png"
import Pic2 from "./pics/pic6.png"
import Pic3 from "./pics/pic7.png"
import blog1 from "./blogs/blog1"
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={HomeStyle.backg}>
      <View style={HomeStyle.mainBanner}>
        <Image style={HomeStyle.HomeImg} source={HomeImg} />
        <View style={HomeStyle.welcomeDescription}>
          <Text numberOfLines={1} style={HomeStyle.userName}>Welcome, User</Text>
          <Text style={HomeStyle.welcomeMsg}>lorem ipsum dolor emit</Text>
        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView} >
          <Image style={HomeStyle.blogImg} source={BlockImg} />
          <Text numberOfLines={2} style={HomeStyle.blogText} onPress={() => navigation.navigate('Blog')}>Corporate Computers And Hardware Are Hiding A Ticking Time Bo.. <Text >
          </Text>
          </Text>

        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView}>
          <Image style={HomeStyle.blogImg} source={Pic1} />
          <Text numberOfLines={2} style={HomeStyle.blogText} onPress={() => navigation.navigate('Blog')}>Lorem ipsum Undetasear No amor  </Text>

        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView}>
          <Image style={HomeStyle.blogImg} source={Pic2} />
          <Text numberOfLines={2} style={HomeStyle.blogText} onPress={() => navigation.navigate('Blog')}>Lorem ipsum Undetasear No amor  </Text>

        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView}>
          <Image style={HomeStyle.blogImg} source={Pic3} />
          <Text numberOfLines={2} style={HomeStyle.blogText} onPress={() => navigation.navigate('Blog')} >Lorem ipsum Undetasear No amor </Text>

        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView}>
          <Image style={HomeStyle.blogImg} source={Pic1} />
          <Text numberOfLines={2} style={HomeStyle.blogText} onPress={() => navigation.navigate('Blog')} >Lorem ipsum Undetasear No amor    </Text>

        </View>
      </View>
      <View style={HomeStyle.blogsWrapper}>
        <View style={HomeStyle.blogView}>
          <Image style={HomeStyle.blogImg} source={Pic2} />
          <Text numberOfLines={2} onPress={() => navigation.navigate('Blog')} style={HomeStyle.blogText}>Lorem ipsum Undetasear No amor </Text>

        </View>
      </View>
      <View style={HomeStyle.back}>
        <Text style={HomeStyle.lasttxt}>
          That's All For Now
        </Text>
      </View>

    </ScrollView>
  )
}



export default Home