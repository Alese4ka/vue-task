export default({
  state: {
    tasks: [
      {id: 1, title: 'Task 1', isCompleted: false},
      {id: 2, title: 'Task 2', isCompleted: false},
      {id: 3, title: 'Task 3', isCompleted: false},
      {id: 4, title: 'Task 4', isCompleted: false},
    ]
  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    changeTask (state, id) {
      state.tasks.forEach(function(task){
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
  },
  actions: {
  },
});