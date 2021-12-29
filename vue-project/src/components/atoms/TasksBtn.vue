<template>
  <div :class="$style.tasksBtn"> 
    <label :class="$style.label">
      <span v-bind:class="{done: item.isChecked}">
      <input type="radio" name="radio" value="1" :class="$style.radio" v-on:change="item.isChecked = !item.isChecked">
      <span :class="$style.fake">
        <span :class="$style.text" v-for="item in items" :key="item">
            {{ item.text }}
          </span>
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id: 1, text: 'All', isChecked: false},
        {id: 2, text: 'Active', isChecked: true},
        {id: 3, text: 'Complited', isChecked: false},
      ]
    }
  },
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
  }
  input[type=radio] {
    display: none;
  }
  .done{
    background: red;
  }
  .fake {
    @include fake-tasks-btn();
    padding: 0.1rem 1rem 0.1rem 0.5rem;
    @media (max-width: 28.125rem) {
      padding: 0.1rem 2rem 0.3rem 0.5rem;
    }
    .text{
      margin-left: 2.7rem;
    }
  }
  /*.fakeOne{
    @include fake-tasks-btn();
    padding: 0.1rem 3rem 0.3rem 3rem;
    @media (max-width: 28.125rem) {
      padding: 0.1rem 3rem 0.3rem 2rem;
    }
  }
  .fakeTwo{
    @include fake-tasks-btn();
    padding: 0.1rem 2.2rem 0.3rem 2.2rem;
    @media (max-width: 28.125rem) {
      padding: 0.1rem 3rem 0.3rem 1.5rem;
    }
  }*/
  .fake::before, .fakeOne::before, .fakeTwo::before {
    content: "";
    width: 7.5rem;
    height: 1.7rem;
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
  input[type=radio]:checked + .fakeOne::before {
    opacity: 1;
  }
  input[type=radio]:checked + .fakeTwo::before {
    opacity: 1;
  }
} 
</style>