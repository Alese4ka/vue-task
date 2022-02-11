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
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("render a Tasks", () => {
    const wrapper = shallowMount(TodoList, { store, localVue });
    expect(wrapper.find(".action")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
})
