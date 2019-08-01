import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class MapScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
