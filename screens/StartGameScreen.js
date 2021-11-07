import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';
import TextOpenSans from '../components/TextOpenSans';
import TextOpenSansBold from '../components/TextOpenSansBold';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    });

    return () => subscription?.remove();
  });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', () => {
  //     setButtonWidth(Dimensions.get('window').width / 4);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has ro be a number between 1 and 99',
        [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput =
      <Card style={styles.chosenNumberWrapper}>
        <TextOpenSans>You selected</TextOpenSans>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton title='START GAME' onPress={() => { props.onStartGame(selectedNumber); }} />
      </Card>;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
          <View style={styles.screen}>
            <TextOpenSansBold style={styles.title}>Start a New Game</TextOpenSansBold>
            <Card style={styles.inputContainer}>
              <TextOpenSans>Select a number</TextOpenSans>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button title={'Reset'} onPress={resetInputHandler} color={Colors.red} />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button title={'Confirm'} onPress={confirmInputHandler} color={Colors.main} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  // button: {
  //   // width: 90
  //   width: Dimensions.get('window').width / 4
  // },
  input: {
    width: 50,
    textAlign: 'center'
  },
  chosenNumberWrapper: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
