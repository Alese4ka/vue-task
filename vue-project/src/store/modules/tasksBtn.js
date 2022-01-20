export default({
  state: {
    items: [
      {id: 1, text: 'All', isChecked: false},
      {id: 2, text: 'Active', isChecked: false},
      {id: 3, text: 'Completed', isChecked: false},
    ]
  },
  getters: {
    allItems(state) {
      return state.items
    }
  },
  mutations: {
  },
  actions: {
  },
});