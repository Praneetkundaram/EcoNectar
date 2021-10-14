// import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
// import { render } from 'react-dom'
// import { render } from 'react-dom'
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native'
// import { Icon } from 'react-native-elements'
// import { TeamOutlined } from '@ant-design/icons'
export default function Home () {
  console.log('In home')
  console.log(route.params)
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
         <Text style={styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet vestibulum felis molestie venenatis. Mauris luctus porta dolor quis viverra. Duis dignissim risus non bibendum dignissim. In commodo gravida convallis. Vestibulum vel efficitur dolor. Fusce quis tellus semper, ultrices sapien nec, ultricies mi. Nunc ut posuere enim. Sed felis velit, ornare ut mi et, sollicitudin tempus nibh. Duis porta laoreet pretium. Donec purus sapien, aliquet ac efficitur quis, cursus sed diam. In tempus ornare mi, nec tristique risus interdum in. Praesent quis consectetur turpis.
         </Text>
        <Text style={styles.txt}>Cras consequat ornare porttitor. Nullam sem lacus, vulputate id enim in, varius maximus dui. In interdum ante ac dui venenatis commodo. Phasellus consectetur lacus tempor condimentum pharetra. Ut in orci quis turpis fermentum interdum vel ac nisl. Cras quis turpis gravida, vehicula nisl tincidunt, viverra justo. Mauris et pellentesque mauris. In non vulputate nulla. Curabitur aliquam, dui eget suscipit euismod, ante nunc faucibus augue, in aliquam nisi dolor viverra diam. Vivamus nec posuere velit, id accumsan dolor. Donec tincidunt interdum risus, pretium imperdiet sapien eleifend quis. Ut dictum in quam quis consectetur. Quisque vitae fringilla dolor. Proin ut eros nec orci luctus efficitur quis sit amet metus. Nullam odio massa, efficitur eu nulla et, aliquam auctor libero. Maecenas tincidunt ex tincidunt maximus placerat.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 560
    height: '100%',
    backgroundColor: '#000'
    
  },
  txt:
  {
    color: 'grey',
    width: 350,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    fontWeight: '500',
    margin: 17
  },
  scrollView:
  {
    backgroundColor: '#000',
   flexGrow: 1
  }
})
