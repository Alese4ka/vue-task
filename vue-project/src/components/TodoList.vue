<template>
  <div class="wrapper">
    <p>to do list</p>
    <ul>
      <li>
        <input type="checkbox">
        Task 1
        <button class="delete">&times;</button>
      </li>
      <li>
        <input type="checkbox">
        Task 2
        <button class="delete">&times;</button>
      </li>
      <li>
        <input type="checkbox">
        Task 3
        <button class="delete">&times;</button>
      </li>
      <li>
        <input type="checkbox">
        Task 4
        <button class="delete">&times;</button>
      </li>
    </ul>
    <button class="add">Add a new task</button>
  </div>
</template>

<style lang="scss">
.wrapper{
  margin: 0 auto;
  max-width: 73.625rem;
  background-color: #FE9526;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
} 
</style>