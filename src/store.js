import { createStore } from "vuex";
import  data  from "../data.json";

const store = createStore({
  state: {
    count: 0,
    bookmarkedData:[],
    cardData:data
  },
  mutations: {
    bookmark(state,recommended) {
      const items = state.cardData.find(i => i == recommended);
      if(items.title == recommended.title){
if (typeof items.marked === 'undefined') {
        items.marked = true
      }
      else  {
        items.marked = !items.marked      
      }
      console.log(items.title,recommended.title);
    }
      }
  },
  actions: {
    bookmark(context,recommended) {
      context.commit('bookmark',recommended);
    }
  },
  getters: {
    marked: state => state.marked
  }
});

export default store;