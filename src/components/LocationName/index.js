import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

class LocationName extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <Text>
        {children}
      </Text>
    )
  }
}

const mapStateToProps = ({ location: { displayName }}) => ({
  children: displayName
})

export default connect(mapStateToProps)(LocationName)
