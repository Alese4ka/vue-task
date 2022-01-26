import { v4 as uuidv4 } from "uuid";

export default({
  state: {
    tasks: [
      {id: uuidv4(), title: 'Task 1', isCompleted: false},
      {id: uuidv4(), title: 'Task 2', isCompleted: false},
      {id: uuidv4(), title: 'Task 3', isCompleted: false},
      {id: uuidv4(), title: 'Task 4', isCompleted: false},
    ],
    filter: 'All'
  },
  getters: {
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
    getNumberAll(state){
      return state.tasks
    },
    getNumberCompleted(state){
      return state.tasks.filter(task => task.isCompleted);
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
    deleteTask (state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addTask (state, payload) {
      state.tasks.push({...payload})
    },
    filterBtn (state, text) {
      state.filter = text
    }
  },
  actions: {
  },
});