import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Tasks from '@/components/molecules/Tasks.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("test for Tasks", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      filterTasks: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("arrayContaining", () => {
    const wrapper = shallowMount(Tasks, { store, localVue })
    expect(wrapper.find(".tasks").exists()).toBe(false)
  })
})
