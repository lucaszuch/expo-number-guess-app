import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    // Here we are creating a Presentional Component, so we are able to use it in multiple places and override the style whe needed
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    // iOs only
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    backgroundColor: '#FFF',
    // Android only
    elevation: 5
  }
});

export default Card;