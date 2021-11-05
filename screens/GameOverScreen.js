import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import TextOpenSans from '../components/TextOpenSans';
import TextOpenSansBold from '../components/TextOpenSansBold';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TextOpenSansBold style={styles.title}>Game Over</TextOpenSansBold>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode={'cover'} source={require('../assets/success.png')} />
      </View>
      <TextOpenSans style={styles.text}>
        Your phone needed <TextOpenSansBold>{props.numberOfGuessRounds}</TextOpenSansBold> rounds
      </TextOpenSans>
      <TextOpenSans style={styles.text}>
        to guess the number <TextOpenSansBold>{props.userNumber}</TextOpenSansBold>
      </TextOpenSans>
      <MainButton title='PLAY AGAIN' onPress={props.configureNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 6
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
    marginHorizontal: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10
  }
});

export default GameOverScreen;
