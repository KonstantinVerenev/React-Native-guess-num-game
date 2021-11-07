import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import MainButton from '../components/MainButton';
import TextOpenSans from '../components/TextOpenSans';
import TextOpenSansBold from '../components/TextOpenSansBold';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    marginBottom: 6,
    textAlign: 'center',
    marginHorizontal: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: Dimensions.get('window').height * 0.35,
    height: Dimensions.get('window').height * 0.35,
    borderRadius: Dimensions.get('window').height * 0.35 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 40
  }
});

export default GameOverScreen;
