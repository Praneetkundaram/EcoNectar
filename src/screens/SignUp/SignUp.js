import React, { Component } from 'react';
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Login/Login'
import { Linking } from 'react-native';
// import Link from "react-router-dom";
export default class RegistrationScreen extends Component {

  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();
  firstnameInputRef = React.createRef();
  lastnameInputRef = React.createRef();
  // addressInputRef = React.createRef();
  // zipInputRef = React.createRef();
  phoneInputRef = React.createRef();
  scrollViewRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        // address: '',
        phone: '',
        showEmailError: false,
        showPasswordError: false,
        showFirstnameError: false,
        showLastnameError: false,
        // showAddressError: false,
        showPhoneError: false,
    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.emailInputRef,
      this.passwordInputRef,
      this.firstnameInputRef,
      this.lastnameInputRef,
      // this.addressInputRef,
      this.phoneInputRef,
    ];
  };

  editNextInput = () => {
    console.log("editNextInput")
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }

    const nextIndex = activeIndex + 1;
    if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
        this.setFocus(this.inputs()[nextIndex], true);
    } else {
        this.finishEditing();
    }
  }

  // onInputFocus = () => {
  //   this.setState({
  //       activeIndex: this.getActiveInputIndex(),
  //   });
  // }

  onChangeInputHandler = (name, value) => {
    this.setState({
        [name]: value,
    });
  }

  // getActiveInputIndex = () => {
  //   const activeIndex = this.inputs().findIndex((input) => {
  //       if (input.current == null) {
  //           return false;
  //       }
  //       console.log("input: ", input);
  //       return input.current.isFocused();
  //   });
  //   console.log("activeIndex: ", activeIndex);
  //   return activeIndex;
  // }

  finishEditing = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }
    this.setFocus(this.inputs()[activeIndex], false);
  }

  setFocus(textInputRef, shouldFocus) {
    if (shouldFocus) {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    } else {
        textInputRef.current.blur();
    }
  }

  submitPressed() {
    console.log("submitPressed this.state: ", this.state);
    this.setState({
        showEmailError: this.state.email.length < 4,
        showPasswordError: this.state.password.length < 4,
        showFirstnameError: this.state.firstname.length < 4,
        showLastnameError: this.state.lastname.length < 4,
        // showAddressError: this.state.address.length < 4,
        showPhoneError: this.state.phone.length < 4,
    });
    Keyboard.dismiss();
  }

  render() {
    return (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentOffset={{ x: 0, y: 24 }}
          ref={this._scrollViewRef}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: 24 }}
          contentInsetAdjustmentBehavior="always"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          enableOnAndroid={true}
          extraHeight={32}
          extraScrollHeight={Platform.OS == "android" ? 32 : 0}
          enableResetScrollToCoords={false}
          onKeyboardDidShow={this._keyboardDidShowHandler}
        >
            <View style={styles.container}>

                <Text style={styles.header}>SignUp</Text>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.emailInputRef}
                    />
                    {this.state.showEmailError &&
                        <Text style={styles.errorText}>Please enter your email address.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.passwordInputRef}
                    />
                    {this.state.showPasswordError &&
                        <Text style={styles.errorText}>Please enter a password.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="First Name"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.firstnameInputRef}
                    />
                    {this.state.showFirstnameError &&
                        <Text style={styles.errorText}>Please enter your first name.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Last Name"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.lastnameInputRef}
                      />
                    {this.state.showLastnameError &&
                        <Text style={styles.errorText}>Please enter your last name.</Text>
                    }
                </View>
                {/* <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Address"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.addressInputRef}
                      />
                    {this.state.showAddressError &&
                        <Text style={styles.errorText}>Please enter your address.</Text>
                    }
                </View> */}

                {/* <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Zipcode"
                        style={styles.textInput}
                        returnKeyType="next"
                        keyboardType='numeric'
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.zipInputRef}
                    />
                    {this.state.showZipError &&
                        <Text style={styles.errorText}>Please enter your zipcode.</Text>
                    }
                </View> */}

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Phone"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.phoneInputRef}
                    />
                    {this.state.showPhoneError &&
                        <Text style={styles.errorText}>Please enter your phone number.</Text>
                    }
                </View>

                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={this.submitPressed} />
                </View>

            </View>
              
        </KeyboardAwareScrollView>
       
      )
  }
}
const Stack = createNativeStackNavigator()
function LoginP ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginP} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      paddingBottom: 100,
      backgroundColor: '#123524',
    },
    header: {
      fontSize: 50,
      padding: 24,
      margin: 12,
      textAlign: "center",
      color: '#33CC33',
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderColor: "#30D0C0",
      borderBottomWidth: 1,
      paddingRight: 30,
      color: 'white'
    },
    errorText: {
      color: 'yellow',
      fontSize: 10,
    },
    btnContainer: {
      // backgroundColor: "yellow",
      marginTop:30,
    }
  })