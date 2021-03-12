<template>
  <div class="card mt-5">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h6 class="card-subtitle mb-2 text-muted">Питання №{{ index + 1 }}</h6>
        <h5 class="card-title">
          {{ question.title }}
        </h5>
      </div>
      <div
        v-for="item in question.items"
        :key="item.id"
        class="form-check"
        :class="{
          'check-correct': correctAnswerId === item.id,
          'check-incorrect': answerId === item.id,
        }"
      >
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="radio"
            :name="`radio-${index}`"
            :value="item.id"
            disabled
            :checked="answerId === item.id"
          />
          {{ item.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerCard",
  props: {
    question: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
    correctAnswerId: {
      required: false,
      type: String,
    },
    answerId: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.check-incorrect label {
  color: red;
}
.check-correct label {
  color: limegreen;
}
</style>
