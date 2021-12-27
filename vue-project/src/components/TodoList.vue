<template>
  <div class="main">
    <div class="wrapper">
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
          <input type="text" class="add" placeholder="Add a new task">
          <div class="action">
            <div>1/3 left</div>
            <div class="variants">
              <div class="tasks-btn">
	              <input id="radio-1" type="radio" name="radio" value="1" checked>
	              <label for="radio-1">All</label>
              </div>
              <div class="tasks-btn">
	              <input id="radio-2" type="radio" name="radio" value="2">
	              <label for="radio-2">Active</label>
              </div>
              <div class="tasks-btn">
	              <input id="radio-3" type="radio" name="radio" value="3">
	              <label for="radio-3">Completed</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/main.scss";
.main{
  background: $wrapper;
  margin: 0 auto;
  max-width: 73.625rem;
  .wrapper{
    background: url("~@/assets/img/vector.svg");
    background-repeat: no-repeat;
    background-position-x: 83%;
    background-position-y: 40%;
    img{
      right: 8rem;
      top: 3.5rem;
    }
    .todo{
      max-width: 33.75rem;
      margin: 0 auto;
      padding-top: 6.1875rem;
      padding-bottom: 6.625rem;
      .todolist{
        z-index: 99;
        background-color: $todolist;
        h1{
          @include font-open ();
          text-align: center;
          color: $h1;
          background-color: $h1back;
          margin: 0;
          padding: 0.6875rem 0;
        }
        ul{
          list-style: none;
          margin: 0 auto;
          padding: 0 1.875rem;
          li{
            margin-top: 1.5625rem;
            background: $li;
            border-radius: 0.625rem;
            padding: 0.6875rem 0.8125rem 0.6875rem 1.25rem;
            display: flex;
            justify-content: space-between;
            @include font-inter ();
            color: $h1;
            .label {
              flex: 1 1 auto;
              display: flex;
              align-items: center;
            }
            .checkbox{
              display: none;
            }
            .fake{
              flex: 0 0 1.3rem;
              position: relative;
              display: inline-block;
              width: 1.25rem;
              height: 1.25rem;
              border: 1.5px solid $check;
              border-radius: 0.3125rem;
            }
            .fake::before{
              flex: 0 0 1.5rem;
              content: url("~@/assets/img/arrow.svg");
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
              padding: 0;
              margin: 0;
              padding-left: 1rem;
            }
            .delete{
              border: 0.0938rem solid $h1back;
              background: none;
              border-radius: 0.3125rem;
              cursor: pointer;
              color:  $h1back;
              width: 1.5rem;
              height: 1.5rem;
            }
            .delete:hover {
              background-color: $delete;
            }
          }
        }
        .add{
          width: 90%;
          background: $add;
          border: 0.0938rem dashed $h1back;
          box-sizing: border-box;
          border-radius: 0.625rem;
          padding: 1rem 0;
          margin: 0 auto;
          margin-top: 1.5625rem;
          margin-bottom: 1.875rem;
        }
        ::placeholder { 
          @include font-inter ();
          color:  $h1back;
          text-align: center;
        }
        :focus::placeholder {
          color: transparent;
        }
        .action{
          padding: 0.5rem 0 0.5rem 1rem;
          background-color:  $h1back;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: $action;
          @include font-open ();
          .variants{
            display: flex;
            justify-content: space-between;
            .tasks-btn {
	            display: inline-block;
              margin-right: 0.625rem;
            } 
            .tasks-btn input[type=radio] {
	            display: none;
            }
            .tasks-btn label {
              display: inline-block;
	            cursor: pointer;
	            padding: 0rem 0.9375rem;
	            user-select: none;
              border: 1px solid $h1back;
              border-radius: 0.625rem;
            }
            .tasks-btn input[type=radio]:checked + label {
              border: 1px solid $all;
              border-radius: 0.625rem;
            }
          }
        }
      }
    }
  } 
}
</style>