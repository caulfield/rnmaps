import React from 'react'
import { connect } from 'react-redux'
import { Marker } from 'react-native-maps'

const TargetMarker = ({
  location
}) => (
  <Marker
    coordinate={location}
  />
)

const mapStateToProps = ({ location }) => ({
  location
})

export default connect(mapStateToProps)(TargetMarker)
