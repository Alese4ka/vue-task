<template>
  <div :class="$style.tasksBtn"> 
    <label :class="$style.label">
      <span>
        <input type="radio" name="radio" value="1" :class="$style.radio" :checked="isChecked" @change="select">
        <span :class="$style.fake">
          <span :class="$style.text">
            {{ text }}
          </span>
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    text: {
      type: String
    },
    isChecked: {
      type: Boolean
    }
  },
  methods: {
    select() {
      this.$store.commit('filterBtn', this.text)
    }
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasksBtn {
  display: inline-block;
  .label{
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  input[type=radio] {
    display: none;
  }
  .fake {
    @include fake-tasks-btn();
    padding: 0.1rem 0.3rem 0.1rem 0;
    @media (max-width: 28.125rem) {
      padding: 0.1rem 2rem 0.3rem 0.5rem;
    }
    .text{
      margin-right: 0.5rem;
      margin-left: 1rem;
    }
  }
  .fake::before{
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    border: 0.0625rem solid $all;
    border-radius: 0.625rem;
    opacity: 0;
    transition: .2s;
    @media (max-width: 28.125rem) {
      width: 5rem;
    }
  }
  input[type=radio]:checked + .fake::before {
    opacity: 1;
  }
} 
</style>