import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
    this.state = { password: '', username: '' }
  }

  render () {
    let yourPicture = {
      uri: 'https://wallpaperaccess.com/full/321269.jpg'
    }

    return (
      <View>
        <ImageBackground
          source={yourPicture}
          style={{ width: '100%', height: '100%' }}
        >
          <View
            style={{
              flex: 1,
              paddingBottom: '20%',
              flexDirection: 'column-reverse',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <View style={{ margin: '1%', width: '80%' }}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>
                Don't have an account?{' '}
                <Text onPress={this._signUpAsync} style={{ color: '#3C5A99' }}>
                  Sign Up!
                </Text>
              </Text>
            </View>

            <View style={{ margin: '1%', width: '80%' }}>
              <Button
                title='Log In with credentials'
                color='#A9A9A9'
                onPress={this._logInAsync}
              />
            </View>

            <View style={{ margin: '1%', width: '80%' }}>
              <Button
                title='Log In with Facebook'
                color='#3C5A99' // Facebook Official Color
                onPress={this._signInAsync}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }

  _logInAsync = async () => {
    this.props.navigation.navigate('LogIn')
  }

  _signUpAsync = async () => {
    this.props.navigation.navigate('SignUp')
  }
}
/*
 */
