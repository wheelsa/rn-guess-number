import React from 'react'
import {View, StyleSheet } from 'react-native'

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>

}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2 },
    shadowRadius: 6, //shadow only works on IOS
    shadowOpacity: 0.26,
    elevation: 5, //only works on android
    backgroundColor: 'white',
    borderRadius: 10,
  },
})
export default Card;