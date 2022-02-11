import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("tests for store", () => {
  it("addTask", () => {
    let newTask = "newTask";
    store.commit("addTask", newTask);
    expect(store.state.tasks[0].title).toBe("newTask");
    expect(store.state.tasks[0].isCompleted).toBe(false);
  });
  it("changeTask", () => {
    store.state.tasks[0].isCompleted = !store.state.tasks[0].isCompleted;
    store.commit("changeTask", store.state.tasks[0].isCompleted);
    expect(store.state.tasks[0].isCompleted).toBe(true);
  });
  it("deleteTask", () => {
    store.state.tasks[0] = false;
    store.commit("deleteTask", store.state.tasks[0]);
    expect(store.state.tasks[0]).toBe(false);
  });
  it("getNumberAll", () => {
    const lengthAll = 1
    const result = store.getters.getNumberAll
    expect(result).toEqual(lengthAll)
  });
  it("getNumberCompleted", () => {
    const lengthCompleted = 0
    const result = store.getters.getNumberCompleted
    expect(result).toEqual(lengthCompleted)
  });
});