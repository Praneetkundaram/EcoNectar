import React from 'react'
import { StyleSheet, View, StatusBar, Text, ScrollView,Image } from 'react-native'
// import { Link } from 'react-router-dom'
// import DropDownItem from 'react-native-drop-down-item'
// import Home from './Home'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* <Text style={styles.title}>AboutUs</Text> */}
        {/* <Text style={styles.write}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla lorem ut erat mattis fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec id neque nec velit imperdiet fringilla. Quisque nec venenatis nulla, ac ultricies leo. Ut finibus tortor nulla, eu vestibulum libero iaculis vel. Quisque in mi ac eros commodo vehicula ac ut diam. Phasellus id purus faucibus, auctor arcu eu, fringilla metus. Maecenas eu fermentum ante. Duis imperdiet dui eleifend vehicula rhoncus. Aliquam erat volutpat.</Text> */}
        <Text style={styles.title2}>Our Aim</Text>
        <Text style={styles.write}>The goal of e-waste recycling providers is to help businesses and organizations in getting rid of obsolete electronics and safeguard the environment. ... The overall aim is to contribute with the EU objectives in relation to GHG reduction for 2020 in the waste management sector.</Text>
        <Text style={styles.title2}>What We Do?</Text>
        <Text style={styles.write}>E-waste recycling is the reuse and reprocessing of electrical and electronic equipment of any type that has been discarded or regarded as obsolete. Recycling of e-waste is a growing trend and was initiated to protect human and environmental health mainly due to the widespread environmental pollution impacts of e-waste.</Text>
        <Text style={styles.title2}>How We Do?</Text>
        <Text style={styles.write}>e-Waste management process includes the following:
          Recycling: complete segregation of parts and materials that is then used to build new electronic products. Refurbishing: reuse of the working, good quality products to replace parts and extend the life of other electronic equipment.
        </Text>
        <Text style={styles.title2}>
          Here are Some Images of Recycling Process Of E-Waste
        </Text>
        <Image style={styles.pic} source={require('../AboutUs/Pic.png')} />
        <Image style={styles.pic} source={require('../AboutUs/Pic1.png')} />
        <Image style={styles.pic} source={require('../AboutUs/Pic2.png')} />
        <Image style={styles.pic} source={require('../AboutUs/Pic3.png')} />
        <Image style={styles.pic} source={require('../AboutUs/Pic4.png')} />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 20
  },
  title: {
    color: 'white',
    // marginBottom: 60,
    margin: 30,
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  write: {
    color: 'grey',
    width: 350,
    textAlign: 'center',
    fontWeight: '500',
    margin: 17
  },
  title2: {
    color: 'white',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pic: 
  {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    // margin: 50,
    marginTop: 20,
    marginHorizontal: 45,
    marginVertical: 25
  }
  // },
  // write2: {
  //   color: 'grey',
  //   width: 350,
  //   textAlign: 'center',
  //   fontWeight: 'medium',
  //   margin: 17
  // }
})
