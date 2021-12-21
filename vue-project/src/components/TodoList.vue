<template>
  <div class="wrapper">
    <img src="~@/assets/vector.svg">
    <div class="todo">
      <div class="todolist">
      <h1>to do list</h1>
      <ul>
        <li>
          <label class="label">
            <input type="checkbox" class="checkbox">
            <span class="fake"></span>
            <span class="text">Task 1</span>
          </label>
          <button class="delete">&times;</button>
        </li>
        <li>
          <label class="label">
            <input type="checkbox" class="checkbox">
            <span class="fake"></span>
            <span class="text">Task 2</span>
          </label>
          <button class="delete">&times;</button>
        </li>
        <li>
          <label class="label">
            <input type="checkbox" class="checkbox">
            <span class="fake"></span>
            <span class="text">Task 3</span>
          </label>
          
          <button class="delete">&times;</button>
        </li>
        <li>
          <label class="label">
            <input type="checkbox" class="checkbox">
            <span class="fake"></span>
            <span class="text">Task 4</span>
          </label>
          <button class="delete">&times;</button>
        </li>
      </ul>
      <button class="add">Add a new task</button>
      <div class="action">
        <div>1/3</div>
        <div class="variants">
          <p class="all">All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@mixin font-open () {
  font-family: 'Open Sans', sans-serif;;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
@mixin font-inter () {
  font-family: 'Inter', sans-serif;;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.wrapper{
  margin: 0 auto;
  max-width: 73.625rem;
  background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
  position: relative;
  img{
    z-index: 1;
    position: absolute;
    right: 8rem;
    top: 3.5rem;
  }
  .todo{
    z-index: 99;
    max-width: 33.75rem;
    margin: 0 auto;
    padding-top: 6.1875rem;
    padding-bottom: 6.625rem;
    .todolist{
      z-index: 99;
      background: #FFF4E9;
      h1{
        @include font-open ();
        text-align: center;
        color: #7F4B13;
        background-color: #FFCA93;
        margin: 0;
        padding: 0.6875rem 0;
      }
      ul{
        list-style: none;
        margin: 0 auto;
        padding: 0 1.875rem;
        li{
          margin-top: 1.5625rem;
          background: #FFDFBE;
          border-radius: 0.625rem;
          padding: 0.6875rem 0;
          padding-left: 1.25rem;
          padding-right: 0.8125rem;
          display: flex;
          justify-content: space-between;
          @include font-inter ();
          color: #7F4B13;
          .checkbox{
            display: none;
          }
          .fake{
            display: inline-block;
            width: 1.25rem;
            height: 1.25rem;
            border: 1.5px solid #FEB567;
            border-radius: 0.3125rem;
          }
          .fake::before{
            content: url("~@/assets/arrow.svg");
            position: absolute;
            display: block;
            transform: translate(-50%, -50%);
            width: 0.625rem;
            height: 0.625rem;
            margin: 0.2rem 0rem 0.5rem 0.2rem;
            opacity: 0;
            transition: .2s;
          }
          .checkbox:checked + .fake::before{
            opacity: 1;
          }
          .text{
            padding-left: 1rem;
          }
          .delete{
            border: 0.0938rem solid #FFCA93;
            background: none;
            border-radius: 0.3125rem;
            cursor: pointer;
            color: #FFCA93;
            width: 1.5rem;
            height: 1.5rem;
          }
          .delete:hover {
            background-color: #FC8F1A;
          }
        }
      }
      .add{
        width: 90%;
        background: #FFECD8;
        border: 0.0938rem dashed #FFCA93;
        box-sizing: border-box;
        border-radius: 0.625rem;
        padding: 0.6875rem 0;
        margin: 0 auto;
        margin-top: 1.5625rem;
        margin-bottom: 1.875rem;
        @include font-inter ();
        color: #FFCA93;
      }
      .action{
        background-color: #FFCA93;
        display: flex;
        justify-content: space-around;
        align-items: center;
        //padding: 0.6875rem 0.3125rem 0.6875rem 1.875rem;
        color: rgba(127, 75, 19, 0.42);
        @include font-open ();
        .variants{
          display: flex;
          justify-content: space-between;
          .all{
            border: 0.0625rem solid #C9955D;
            box-sizing: border-box;
            border-radius: 0.625rem;
            padding: 0 0.6875rem;
          }
          p{
            margin: 0.6875rem 0.78125rem;
          }
        }
      }
    }
  }
} 

</style>