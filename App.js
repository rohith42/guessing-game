import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }
  
  let screen = <StartGameScreen pickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen actual={userNumber} onGameOver={gameOverHandler} />;
  }

  if (userNumber && gameOver) {
    screen = <GameOverScreen />
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
