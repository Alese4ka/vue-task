import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import AddTask from '@/components/atoms/AddTask.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("test for AddTask", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "addTask"', () => {
    const wrapper = shallowMount(AddTask, { store, localVue });
    wrapper.find("input").trigger("keyup.enter");
    expect(mutations.addTask).toHaveBeenCalled();
  });
})
