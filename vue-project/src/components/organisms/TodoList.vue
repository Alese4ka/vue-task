<template>
  <main :class="$style.main">
    <div :class="$style.wrapper">
      <div :class="$style.todo">
        <div :class="$style.todolist">
          <h1>to do list</h1>
          <Task />
          <AddTask />
          <div :class="$style.action">
            <div>1/3 left</div>
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
    Task: () => import('../molecules/Tasks.vue'),
    AddTask: () => import('../atoms/AddTask.vue'),
    SwitchTasks: () => import('../molecules/SwitchTasks.vue'),
  }
}
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.main{
  background: $wrapper;
  margin: 0 auto;
  max-width: 73.625rem;
  .wrapper{
    background: url("~@/assets/img/vector.svg");
    background-repeat: no-repeat;
    background-position-x: 83%;
    background-position-y: 40%;
    .todo{
      max-width: 33.75rem;
      margin: 0 auto;
      padding-top: 6.1875rem;
      padding-bottom: 6.625rem;
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
</style>