import React from 'react'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { View, Text, StyleSheet } from 'react-native'

import {
  onRegionChangeComplete,
  getMyLocation
} from './../../actions/location'

import TargetMarker from './../TargetMarker'
import LocationName from './../LocationName'

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
            alignItems: 'center',
        justifyContent: 'center'
  },
  bottomContainer: {
    width: '100%', 
    flex: 0,
    backgroundColor: 'aqua', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
})

class Map extends React.Component {

  componentDidMount() {
    this.props.getMyLocation()
  }

  render() {
    const {
      location,
      onRegionChangeComplete,
      getMyLocation
    } = this.props

    return (
      <MapView
        showsUserLocation
        showsMyLocationButton
        onRegionChangeComplete={onRegionChangeComplete}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <TargetMarker />
        <View
          style={styles.bottomContainer}
        >
          <LocationName />
        </View>
      </MapView>
    )
  }
}

const mapStateToProps = ({ location }) => ({
  location
})

const mapDispatchToProps = {
  onRegionChangeComplete,
  getMyLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
