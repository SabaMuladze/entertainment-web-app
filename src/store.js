import { createStore } from "vuex";
import  data  from "../data.json";

const store = createStore({
  state: {
    count: 0,
    bookmarkedData:[],
    cardData:data,
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
      if (items.marked ==true && !state.bookmarkedData.includes(items)) {
        state.bookmarkedData.push(items)
      }
      else{
              state.bookmarkedData.splice(items,1)
      }

    }
      },
      unbookmark(state,movie){
        const items = state.cardData.find(i => i == movie);
      if(items.title == movie.title ){
      state.bookmarkedData.splice(items,1)
      items.marked = false
      }
    }
  },
  actions: {
    bookmark(context,recommended) {
      context.commit('bookmark',recommended);
    },
    unbookmark(context,movie){
      context.commit('unbookmark',movie)
    }
  },
  getters: {
    bookmarkedData: state => state.bookmarkedData,
    
  }
});

export default store;