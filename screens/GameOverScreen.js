import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of round: {props.numberOfGuessRounds}</Text>
      <Text>Number was - {props.userNumber}</Text>
      <Button title='PLAY AGAIN' onPress={props.configureNewGame} />
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
});

export default GameOverScreen;
