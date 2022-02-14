import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import TasksBtn from '@/components/atoms/TasksBtn.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("test for TasksBtn", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      filterBtn: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "filterBtn"', () => {
    const wrapper = shallowMount(TasksBtn, { store, localVue });
    wrapper.find('input[type="radio"]').trigger("click");
    expect(mutations.filterBtn).toHaveBeenCalled();
  });
})
