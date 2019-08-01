import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

export default class ExploreScreen extends React.Component {
  // https://aboutreact.com/react-native-search-bar-filter-on-listview/
  // https://appdividend.com/2018/04/10/react-native-flatlist-example/

  state = {
    users: [
      {
        id: '1',
        name: 'Alex',
        update: 'Travelling to San Francisco on August, 25th'
      },
      {
        id: '2',
        name: 'Jack',
        update: 'Is an asshole'
      }
    ]
  }

  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <View style={{alignItems: 'stretch' }}>
          <Button title='Newest' onPress={this._newestAsync}/>
          <Button title='Most Important' onPress={this._mostImportantAsync}/>
          <Button title='Upcoming' onPress={this._upcomingAsync}/>
        </View>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{paddingBottom: '5%'}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.update}>{item.update}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }

  _newestAsync = async () => {
    
  };

  _mostImportantAsync = async () => {
    
  };

  _upcomingAsync = async () => {
    
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
    // backgroundColor: '#F5FCFF',
  },
  flatview: {
    justifyContent: 'flex-start',
    // paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  update: {
    color: 'red'
  }
})
