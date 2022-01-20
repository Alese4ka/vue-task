<template>
<div :class="$style.tasksList">
  <label :class="$style.label">
    <input type="checkbox" :class="$style.checkbox" :checked="isCompleted" @change="set">
    <span :class="$style.fake"></span>
    <span :class="$style.text">
      {{ task.title }}
    </span>
  </label>
  <button :class="$style.delete">&times;</button>
</div>
</template>

<script>
export default {
  props: {
    task: {
      id: Number,
      title: String,
      isCompleted: Boolean
    }
  },
  methods: {
    set(id) {
      this.$store.commit('changeTask', id);
    }
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasksList{
  margin-top: 1.5625rem;
  background: $li;
  border-radius: 0.625rem;
  padding: 0.6875rem 0.8125rem 0.6875rem 1.25rem;
  display: flex;
  justify-content: space-between;
  @include font-inter ();
  color: $h1;
  .label{
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    .checkbox{
      display: none;
    }
    .fake{
      flex: 0 0 1.3rem;
      position: relative;
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      border: 0.0938rem solid $check;
      border-radius: 0.3125rem;
    }
    .fake::before{
      flex: 0 0 1.5rem;
      content: url("~@/assets/img/arrow.svg");
      position: absolute;
      display: block;
      transform: translate(-50%, -50%);
      width: 0.625rem;
      height: 0.625rem;
      margin: 0.2rem 0rem 0.5rem 0.2rem;
      opacity: 0;
      transition: .2s;
    }
    .checkbox:checked + .fake::before{
      opacity: 1;
    }
    .text{
      padding: 0;
      margin: 0;
      padding-left: 1rem;
    }
  }
  .delete{
    border: 0.0938rem solid $h1back;
    background: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    color:  $h1back;
    width: 1.5rem;
    height: 1.5rem;
  }
  .delete:hover {
    background-color: $delete;
  }
  .done{
    text-decoration: line-through;
  }
}
</style>