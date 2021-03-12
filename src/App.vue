<template>
  <div class="container animation-wrapper color-gray-100">
    <h1 class="my-3 text-center">Vue.js online quiz</h1>
    <transition name="rotate" mode="out-in">
      <Card
        v-if="!areAllAnswersReceived"
        :question="questions[currentQuestion]"
        @answer="onAnswer"
        :key="currentQuestion"
        :index="currentQuestion"
      />
    </transition>
    <transition name="fade">
      <div v-if="areAnswersVisible" class="mb-5 row">
        <div
          v-for="(question, i) in questions"
          :key="i"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <AnswerCard
            :question="question"
            :answerId="answers[i]"
            :correctAnswerId="correctAnswers[i]"
            :index="i"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import questions from "./questions.json";
import correctAnswers from "./correctAnswers.json";

import Card from "./components/Card";
import AnswerCard from "./components/AnswerCard";

export default {
  name: "App",
  components: { Card, AnswerCard },
  data() {
    return {
      questions,
      currentQuestion: 0,
      answers: [],
      correctAnswers,
      areAnswersVisible: false,
    };
  },
  methods: {
    onAnswer(answer) {
      if (this.currentQuestion < this.questions.length) {
        this.answers.push(answer);
        this.next();
      }
    },
    next() {
      if (!this.areAllAnswersReceived) {
        this.currentQuestion++;

        if (this.areAllAnswersReceived) {
          setTimeout(() => this.showAnswers(), 500);
        }
      }
    },
    showAnswers() {
      if (this.areAllAnswersReceived) this.areAnswersVisible = true;
    },
  },

  computed: {
    areAllAnswersReceived() {
      return this.currentQuestion === this.questions.length;
    },
  },
};
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.3s linear;
}
.rotate-enter-from {
  transform: rotateY(-90deg);
}
.rotate-leave-to {
  transform: rotateY(90deg);
}

.animation-wrapper {
  perspective: 2000px;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}
</style>