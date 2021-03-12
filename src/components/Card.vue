<template>
  <div class="card">
    <form
      class="card-body d-flex flex-column justify-content-between"
      style="height: 300px"
      @submit.prevent="onSubmit"
    >
      <div>
        <h6 class="card-subtitle mb-2 text-muted">Питання №{{ index + 1 }}</h6>
        <h5 class="card-title">
          {{ question.title }}
        </h5>
      </div>
      <div v-for="item in question.items" :key="item.id" class="form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            :value="item.id"
            v-model="value"
          />
          {{ item.title }}
        </label>
      </div>
      <div class="d-flex justify-content-end">
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
    index: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    onSubmit() {
      if (!this.value) {
        alert("Вкажіть відповідь!");
        return;
      }
      this.$emit("answer", this.value);
    },
  },
};
</script>
