export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const fetchQuestions = async (difficulty: string = 'medium'): Promise<Question[]> => {
  const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`);
  const data = await response.json();
  return data.results;
};
