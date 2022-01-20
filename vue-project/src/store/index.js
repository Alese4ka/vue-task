import Vue from 'vue';
import Vuex from 'vuex';
import tasksBtn from './modules/tasksBtn'
import tasks from './modules/tasks'

Vue.use(Vuex);
 
export default new Vuex.Store({
  modules: {
    tasksBtn,
    tasks
  }
});

