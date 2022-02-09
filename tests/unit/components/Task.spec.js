import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Task from '@/components/atoms/Task.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("test for Task", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      changeTask: jest.fn(),
      deleteTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "changeTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find('input[type="checkbox"]').trigger("click");
    expect(mutations.changeTask).toHaveBeenCalled();
  });
  it('call "deleteTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
})
