import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts, loadAsync } from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
  return await loadAsync({
    'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfGuessRounds, setNumberOfGuessRounds] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 
  // let [fontsLoaded] = useFonts({
  //   'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

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
      configureNewGame={configureNewGame}
    />;
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
