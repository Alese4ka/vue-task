<template>
  <main :class="$style.main">
    <div :class="$style.wrapper">
      <div :class="$style.todo">
        <div :class="$style.todolist">
          <h1>to do list</h1>
          <Tasks />
          <AddTask />
          <div :class="$style.action">
            <div>{{getNumberCompleted.length}}/{{getNumberAll.length}} left</div>
            <SwitchTasks />
          </div>  
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Tasks: () => import('@/components/molecules/Tasks.vue'),
    AddTask: () => import('@/components/atoms/AddTask.vue'),
    SwitchTasks: () => import('@/components/molecules/SwitchTasks.vue'),
  },
  computed: {
    filterTasks() {
      return this.$store.getters.filterTasks;
    },
    getNumberAll() {
      return this.$store.getters.getNumberAll;
    },
    getNumberCompleted() {
      return this.$store.getters.getNumberCompleted;
    }
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
body{
  background: $wrapper;
  .main{
    margin: 0 auto;
    max-width: 73.625rem;
    .wrapper{
      background: url("~@/assets/img/vector.svg");
      background-repeat: no-repeat;
      background-position-x: 40.625rem;
      background-position-y: 4.375rem;
      .todo{
        max-width: 33.75rem;
        margin: 0 auto;
        padding-top: 6.1875rem;
        padding-bottom: 6.625rem;
        min-height: 32.5rem;
        .todolist{
          background-color: $todolist;
          h1{
            @include font-open ();
            text-align: center;
            color: $h1;
            background-color: $h1back;
            margin: 0;
            padding: 0.6875rem 0;
          }
          .action{
            padding: 0.5rem 0 0.5rem 1rem;
            background-color:  $h1back;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $action;
            @include font-open ();
            @media (max-width: 28.125rem) {
              font-size: 0.8rem;
              flex-direction: column;
            }
          } 
        }
      }
    } 
  }
}
</style>