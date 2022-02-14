<template>
  <div :class="$style.variants">
    <TasksBtn
     v-for="item in items" 
     :key="item.id"
     :id="item.id"
     :text="item.text"
     :isChecked="item.isChecked"/>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data: () => ({
    items: [
      {id: uuidv4(), text: 'All', isChecked: false},
      {id: uuidv4(), text: 'Active', isChecked: false},
      {id: uuidv4(), text: 'Completed', isChecked: false},
    ]
  }),
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