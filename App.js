import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfGuessRounds, setNumberOfGuessRounds] = useState(0);

  const configureNewGame = () => {
    setUserNumber(null);
    setNumberOfGuessRounds(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setNumberOfGuessRounds(numberOfRounds);
  };

  let currentScreen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && numberOfGuessRounds <= 0) {
    currentScreen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (numberOfGuessRounds > 0) {
    currentScreen = <GameOverScreen
      numberOfGuessRounds={numberOfGuessRounds}
      userNumber={userNumber}
      configureNewGame={configureNewGame} /
    >;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number game'} />
      {currentScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
