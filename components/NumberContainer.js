import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TextOpenSansBold from './TextOpenSansBold';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <TextOpenSansBold style={styles.number}>
        {props.children}
      </TextOpenSansBold>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.red,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.red,
    fontSize: 22
  }
});


export default NumberContainer;
