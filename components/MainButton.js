import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.main,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans-reg',
    fontSize: 18
  }
});

export default MainButton;
