<template>
<div>
  <p v-show="filterTasks==''">No tasks</p>
  <div :class="$style.tasksList" v-show="filterTasks!==''">
    <Task
    v-for="task in filterTasks" :key="task.id"
    v-bind:task="task"/>
  </div> 
</div>
</template>

<script>
export default {
  components: {
    Task: () => import('@/components/atoms/Task.vue')
  },
  computed: {
    filterTasks() {
      return this.$store.getters.filterTasks;
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
p{
  font-size: 1.5rem;
}
</style>