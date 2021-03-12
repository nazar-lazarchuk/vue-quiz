<template>
  <div class="card mt-5">
    <form
      class="card-body d-flex flex-column justify-content-between"
      style="height: 300px"
      @submit.prevent="onSubmit"
    >
      <div>
        <h6 class="card-subtitle mb-2 text-muted">Питання №1</h6>
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
            name="flexRadioDefault"
            :value="item.id"
            v-model="value"
            :disabled="isPreviewMode"
          />
          {{ item.title }}
        </label>
      </div>
      <div v-if="!correctAnswerId" class="d-flex justify-content-end">
        <button class="btn btn-primary" type="submit">Відправити</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    question: {
      required: true,
      type: Object,
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
  created() {
    if (this.answerId) this.value = this.answerId;
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("answer", this.value);
    },
  },
  
  computed: {
    isPreviewMode() {
      return !!this.correctAnswerId || !!this.answerId;
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
