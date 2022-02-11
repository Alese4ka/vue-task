<template>
<div>
  <p v-if="filterTasks==''">No tasks</p>
  <div :class="$style.tasksList" v-else>
    <Task
    v-for="task in filterTasks" 
    :key="task.id"
    :id="task.id"
    :title="task.title"
    :isCompleted="task.isCompleted"/>
  </div> 
</div>
</template>

<script>
import Task from '@/components/atoms/Task.vue'
export default {
  components: {
    Task
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
  color: $h1;
  padding-top: 1rem;
}
</style>