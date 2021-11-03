import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  }
});

export default Input;
