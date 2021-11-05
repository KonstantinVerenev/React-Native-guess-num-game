import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TextOpenSansBold from '../components/TextOpenSansBold';
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
  const [numberOfGuessRounds, setNumberOfGuessRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(numberOfGuessRounds);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        'Error!', 'Think again, lower or greater?',
        [{ text: 'Try again', style: 'cancel' }]
      );
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'greater') {
      currentLow.current = currentGuess + 1;
    }

    const nextGuessNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextGuessNumber);
    setNumberOfGuessRounds((prevState) => prevState + 1);
  };

  return (
    <View style={styles.screen}>
      <TextOpenSansBold style={styles.title}>Computer's Guess:</TextOpenSansBold>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton title={<Ionicons name='md-remove' size={24} color={'white'} />} onPress={() => { nextGuessHandler('lower'); }} />
        <MainButton title={<Ionicons name='md-add' size={24} color={'white'} />} onPress={() => { nextGuessHandler('greater'); }} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  title: {
    fontSize: 18
  }
});

export default GameScreen;
