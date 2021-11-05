import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextOpenSans = (props) => {
  return (
    <Text style={{ ...styles.openSansReg, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  openSansReg: {
    fontFamily: 'open-sans-reg'
  }
});

export default TextOpenSans;
