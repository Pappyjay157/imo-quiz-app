import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { fetchQuestions, Question } from '../api/fetchQuestions';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

const QuizScreen: React.FC<Props> = ({ route, navigation }) => {
  const { username } = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');


    useEffect(() => {
        fetchQuestions(difficulty).then(setQuestions);
    }, [difficulty]);

  const handleAnswer = (answer: string) => {
  const correct = questions[current].correct_answer;

  if (answer === correct) {
    setScore((prev) => prev + 1);
    setCorrectStreak((prev) => prev + 1);
  } else {
    setCorrectStreak(0);
  }

  // Adjust difficulty
  if (correctStreak >= 2) setDifficulty('hard');
  else if (correctStreak === 0) setDifficulty('easy');
  else setDifficulty('medium');

  setSelected(answer);
  setTimeout(() => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      navigation.navigate('Result', { score, username });
    }
  }, 1000);
};

  if (!questions.length) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading questions...</Text>
      </View>
    );
  }

  const currentQ = questions[current];
  const answers = [...currentQ.incorrect_answers, currentQ.correct_answer].sort();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question {current + 1}</Text>
      <Text style={styles.question}>{currentQ.question}</Text>
      {answers.map((ans) => (
        <TouchableOpacity
          key={ans}
          style={[
            styles.option,
            selected === ans && {
              backgroundColor: ans === currentQ.correct_answer ? 'green' : 'red',
            },
          ]}
          onPress={() => handleAnswer(ans)}
          disabled={!!selected}
        >
          <Text style={styles.optionText}>{ans}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 18,
    marginVertical: 20,
  },
  option: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
