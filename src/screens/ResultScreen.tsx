import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { db } from '../api/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { score, username } = route.params;
  const [highScore, setHighScore] = useState<number | null>(null);

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const ref = doc(db, 'scores', username);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
          const previous = docSnap.data().score;
          setHighScore(previous);
          if (score > previous) {
            await setDoc(ref, { score });
          }
        } else {
          setHighScore(score);
          await setDoc(ref, { score });
        }
      } catch (err) {
        console.error('Error saving score:', err);
      }
    };

    saveHighScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Quiz Complete!</Text>
      <Text style={styles.subtitle}>User: {username}</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
      {highScore !== null && (
        <Text style={styles.high}>Your Best: {Math.max(score, highScore)}</Text>
      )}
      <Button title="Play Again" onPress={() => navigation.replace('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 16, marginBottom: 12 },
  score: { fontSize: 20, marginBottom: 10 },
  high: { fontSize: 16, color: 'green', marginBottom: 20 },
});

export default ResultScreen;
