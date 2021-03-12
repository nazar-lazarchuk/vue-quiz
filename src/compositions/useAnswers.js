import { ref } from 'vue';

import answ from './__mock__/correctAnswers.json';

export default function useAnswers() {
  const answers = ref([]);
  const correctAnswers = ref(answ);
  const areAnswersVisible = ref(false);

  return { answers, areAnswersVisible, correctAnswers };
}
