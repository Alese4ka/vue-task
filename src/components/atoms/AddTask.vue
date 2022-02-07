<template>
  <input
    type="text"
    :class="$style.add"
    v-model="text"
    placeholder="Add a new task"
    v-on:keyup.enter="submit"
  />
</template>

<script>
export default {
  data() {
    return {text: ''}
  },
  methods: {
    submit() {
      this.$store.commit("addTask", this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.add {
  width: 90%;
  background: $add;
  border: 0.0938rem dashed $h1back;
  box-sizing: border-box;
  border-radius: 0.625rem;
  padding: 1rem 1rem;
  margin: 0 auto;
  margin-top: 1.5625rem;
  margin-bottom: 1.875rem;
  font-size: 1.25rem;
  @include font-inter();
  color: $h1;
  outline: none;
}
:focus {
  border: 0.0938rem solid $all;
}
::placeholder {
  @include font-inter();
  color: $h1back;
  text-align: center;
}
:focus::placeholder {
  color: transparent;
}
</style>
