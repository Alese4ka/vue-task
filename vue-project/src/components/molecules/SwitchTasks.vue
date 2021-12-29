<template>
  <div :class="$style.variants">
    <TasksBtn/>
  </div>
</template>

<script>
export default {
  components: {
    TasksBtn: () => import('../atoms/TasksBtn.vue'),
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.variants{
  display: flex;
  justify-content: space-between;
}
</style>