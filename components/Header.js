import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Constants
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts'

const Header = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18
  }
});

export default Header;