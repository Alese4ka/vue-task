import { v4 as uuidv4 } from "uuid";

export default({
  state: {
    tasks: [
      {id: uuidv4(), title: 'Task 1', isCompleted: false},
      {id: uuidv4(), title: 'Task 2', isCompleted: false},
      {id: uuidv4(), title: 'Task 3', isCompleted: true},
      {id: uuidv4(), title: 'Task 4', isCompleted: false},
    ],
    items: [
      {id: uuidv4(), text: 'All', isChecked: false},
      {id: uuidv4(), text: 'Active', isChecked: false},
      {id: uuidv4(), text: 'Completed', isChecked: false},
    ],
    filter: 'All'
  },
  getters: {
    allItems(state) {
      return state.items
    },
    filterTasks(state) {
      if (state.filter == 'All') {
        return state.tasks;
      } else if (state.filter == 'Active') {
        return state.tasks.filter(task => !task.isCompleted);
      } else if (state.filter == 'Completed') {
        return state.tasks.filter(task => task.isCompleted);
      }
      return state.tasks;
    },
  },
  mutations: {
    changeTask (state, id) {
      state.tasks.forEach(function(task){
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    deleteTask (state, payload) {
      state.tasks.splice(payload, 1)
      console.log(state.tasks)
    },
    addTask (state, payload) {
      state.tasks.push({ ...payload })
    },
    changeBtn (state, id) {
      state.items.forEach(function(item){
        if (item.isChecked === true) {
          item.isChecked = false
        }
        if (item.id === id) {
          item.isChecked = !item.isChecked
        }
      })
    },
    filterBtn (state, text) {
      state.items.forEach(function(item){
        if(item.text == text) {
          if(text == "Active"){
            state.filter = 'Active'
          }
          else if(text == "Completed") {
            state.filter = 'Completed'
          }
          else {
            state.filter = 'All'
          }
        }
      })
    }
  },
  actions: {
  },
});