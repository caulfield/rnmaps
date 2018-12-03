import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Map from './../../components/Map'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Map 
        />
      </View>
    );
  }
}
