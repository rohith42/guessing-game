import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function incrementRounds() {
    setRounds((current) => current + 1)
  }

  function startNewGame() {
    setUserNumber(null);
    setRounds(0);
  }
  
  let screen = <StartGameScreen pickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen actual={userNumber} onGameOver={gameOverHandler} />;
  }

  if (userNumber && gameOver) {
    screen = <GameOverScreen rounds={rounds} actual={userNumber} restart={startNewGame} />
  }
  
  return (
    <LinearGradient colors={['aqua', 'white']} style={styles.container}>
      <SafeAreaView style={styles.container} >{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
