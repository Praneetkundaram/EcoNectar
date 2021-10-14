// import React from 'react'
import { StyleSheet } from 'react-native'
// // import {Text} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import { useDarkModeContext } from 'react-native-dark-mode'

const isDarkMode = useDarkModeContext()
export const LoginStyles = StyleSheet.create({
  container: {
    // backgroundColor: '#98FB98',
    backgroundColor: isDarkMode ? 'black' : 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  titleLogin: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: '600'
  },
  form: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5
  },
  input: {
    width: 350,
    height: 40,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3
  },
  button: {
    width: 360,
    height: 40,
    padding: 5,
    margin: 5,
    borderRadius: 3
  }
})
