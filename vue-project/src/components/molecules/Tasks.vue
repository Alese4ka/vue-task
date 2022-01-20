<template>
  <div :class="$style.tasksList">
    <Task
    v-for="task in allTasks" :key="task.title"
    v-bind:task="task"/>
  </div>
</template>

<script>
export default {
  components: {
    Task: () => import('@/components/atoms/Task.vue'),
  },
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    }
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