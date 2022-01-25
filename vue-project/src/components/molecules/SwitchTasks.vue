<template>
  <div :class="$style.variants">
    <TasksBtn
     v-for="item in allItems" :key="item.id"
     v-bind:item="item"/>
  </div>
</template>

<script>
export default {
  components: {
    TasksBtn: () => import('@/components/atoms/TasksBtn.vue'),
  },
  computed: {
    allItems() {
      return this.$store.getters.allItems;
    }
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