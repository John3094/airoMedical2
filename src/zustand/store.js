import { create } from 'zustand';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/';

export const useBeerStore = create((set, get) => ({
  beers: [],
  removeList: [],
  detailsRecipe: [],
  page: 1,
  loader: false,
  error: null,
  isLoading: false,
  getBeers: async () => {
    const page = get().page;
    set(state => ({ loader: true }));
    try {
      const response = await axios.get(`beers?page=${page}`);
      set(state => ({
        beers: response.data,
        page: state.page + 1,
      }));
    } catch (error) {
      set(() => ({ error: error.message }));
    } finally {
      set(state => ({ loader: false }));
    }
  },
  addRemove: id => {
    if (get().removeList.includes(id)) {
      const newSelect = get().removeList.filter(item => item !== id);
      set({ removeList: newSelect });
      return;
    }
    const newList = [...get().removeList, id];
    set({ removeList: newList });
  },
  removeBeers: removes => {
    // eslint-disable-next-line array-callback-return
    removes.map(remove => {
      const newRecipes = get().beers.filter(beer => beer.id !== remove);
      set({ beers: newRecipes });
      set({ removeList: [] });
    });
  },
}));
