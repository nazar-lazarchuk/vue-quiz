import { ref, computed } from 'vue';

import q from './__mock__/questions.json';

export default function useQuestions(areAnswersVisible, answers) {
  const questions = ref(q);
  const currentQuestion = ref(0);

  const areAllAnswersReceived = computed(() => {
    return currentQuestion.value === questions.value.length;
  });

  const showAnswers = () => {
    if (areAllAnswersReceived.value) areAnswersVisible.value = true;
  };

  const onAnswer = (answer) => {
    if (currentQuestion.value < questions.value.length) {
      answers.value.push(answer);
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (!areAllAnswersReceived.value) {
      currentQuestion.value++;

      if (areAllAnswersReceived.value) {
        setTimeout(() => showAnswers(), 500);
      }
    }
  };

  return {
    questions,
    currentQuestion,
    areAllAnswersReceived,
    nextQuestion,
    onAnswer,
  };
}
