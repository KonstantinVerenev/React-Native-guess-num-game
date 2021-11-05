import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextOpenSansBold = (props) => {
  return (
    <Text style={{ ...styles.openSansBold, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  openSansBold: {
    fontFamily: 'open-sans-bold'
  }
});

export default TextOpenSansBold;
