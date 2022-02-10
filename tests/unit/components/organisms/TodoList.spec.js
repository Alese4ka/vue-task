import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import TodoList from '@/components/organisms/TodoList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("test for TodoList", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getNumberAll: jest.fn(),
      //getNumberCompleted: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("getNumberAll", () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    expect(wrapper.find(".tasks").exists()).toBe(false)
  });
  /*it("getNumberCompleted", () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    wrapper.find('input[type="checkbox"]').trigger("click");
    expect(getters.getNumberCompleted).toHaveBeenCalled();
  });*/
})
