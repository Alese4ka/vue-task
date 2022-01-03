<template>
  <div :class="$style.tasksList">
    <Task
    v-for="task in tasks" :key="task"
    :task="task"/>
  </div>
</template>

<script>
export default {
  data () {
    return{
      tasks: [
        {id: 1, title: 'Task 1', isCompleted: false},
        {id: 2, title: 'Task 2', isCompleted: false},
        {id: 3, title: 'Task 3', isCompleted: false},
        {id: 4, title: 'Task 4', isCompleted: false},
      ]
    }
  },
  components: {
    Task: () => import('@/components/atoms/Task.vue'),
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