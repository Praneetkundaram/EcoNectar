import React, { useState } from 'react'
import * as rn from 'react-native'
import { ImageBackground } from 'react-native'

const FormLogin = () => {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })

  const onPress = () => {
    rn.Alert.alert(JSON.stringify(value))
    setValue({
      username: '',
      password: ''
    })
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <rn.View style={styles.container}>
        <rn.Text style={styles.titleLogin}>Welcome To Login Page</rn.Text>
        <rn.View style={styles.form}>
          <rn.TextInput
            style={styles.input}
            placeholder='enter username'
            placeholderTextColor='#FFFF9912'
            onChangeText={(text) => setValue({ ...value, username: text })}
            value={value.username}
            autoCompleteType='off'
          />
          <rn.TextInput
            style={styles.input}
            placeholder='enter password'
            placeholderTextColor='#FFFF9952'
            onChangeText={(text) => setValue({ ...value, password: text })}
            value={value.password}
            autoCompleteType='off'
            secureTextEntry
          />
          <rn.View style={styles.button}>
            <rn.Button title='login' color='green' onPress={onPress} />
          </rn.View>
        </rn.View>
      </rn.View>
    </ImageBackground>
  )
}
const image = { uri: 'https://www.teahub.io/photos/full/96-966369_plain-wall-paper-for-mobile.jpg' }
const styles = rn.StyleSheet.create({
  container: {
    // fontFamily: 'Lobster-Regular',
    position: 'relative',
    flex: 1,
    marginTop: -100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  titleLogin: {
    // fontFamily: 'Lobster-Regular',
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600'
  },
  form: {
    // fontFamily: 'Lobster-Regular',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5
  },
  input: {
    // fontFamily: 'Lobster-Regular',
    width: 350,
    height: 40,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3,
    color: 'red'
  },
  button: {
    // fontFamily: 'Lobster-Regular',
    width: 360,
    height: 40,
    padding: 5,
    margin: 5,
    borderRadius: 3
  }
})

export default FormLogin
