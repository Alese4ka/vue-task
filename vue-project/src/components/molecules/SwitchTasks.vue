<template>
  <div :class="$style.variants">
    <TasksBtn
     v-for="item in items" :key="item"
     v-bind:item="item"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id: 1, text: 'All', isChecked: true},
        {id: 2, text: 'Active    ', isChecked: false},
        {id: 3, text: 'Complited', isChecked: false},
      ]
    }
  },
  components: {
    TasksBtn: () => import('@/components/atoms/TasksBtn.vue'),
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