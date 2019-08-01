import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  TextInput
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  }

  constructor (props) {
    super(props)
    this.state = { password: '', username: '', name: '' }
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
              paddingTop: '20%',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <View style={{ margin: '1%', width: '80%' }}>
              <TextInput
                style={{ borderColor: '#000000', borderWidth: 1, backgroundColor: '#FFFFFF'}}
                placeholder='Full Name'
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </View>
            <View style={{ margin: '1%', width: '80%' }}>
              <TextInput
                style={{ borderColor: '#000000', borderWidth: 1, backgroundColor: '#FFFFFF'}}
                placeholder='Username'
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={{ margin: '1%', width: '80%' }}>
              <TextInput
                style={{ borderColor: '#000000', borderWidth: 1, backgroundColor: '#FFFFFF'}}
                placeholder='Password'
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <View style={{ margin: '5%', width: '50%' }}>
              <Button
                title='Log In'
                color='#A9A9A9'
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
