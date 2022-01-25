export default({
  state: {
    tasks: [
      {id: 1, title: 'Task 1', isCompleted: false},
      {id: 2, title: 'Task 2', isCompleted: false},
      {id: 3, title: 'Task 3', isCompleted: true},
      {id: 4, title: 'Task 4', isCompleted: false},
    ],
    items: [
      {id: 1, text: 'All', isChecked: false},
      {id: 2, text: 'Active', isChecked: false},
      {id: 3, text: 'Completed', isChecked: false},
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
    deleteTask (state, id) {
      let i = id - 1
      state.tasks.splice(i, 1)
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