<template>
  <div :class="$style.tasksList">
    <Task
    v-for="task in tasks" :key="task"
    v-bind:task="task"/>
  </div>
</template>

<script>
export default {
  data () {
    return{
      tasks: [
        {id: 1, title: 'Task 1', completed: false},
        {id: 2, title: 'Task 2', completed: false},
        {id: 3, title: 'Task 3', completed: false},
        {id: 4, title: 'Task 4', completed: false},
      ]
    }
  },
  components: {
    Task: () => import('../atoms/Task.vue'),
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasksList{
  margin: 0 auto;
  padding: 0 1.875rem;
}
</style>