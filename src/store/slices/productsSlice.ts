import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsState } from '../../types';
import { mockProducts } from '../../data/mockData';

const initialState: ProductsState = {
  items: mockProducts,
  loading: false,
  selectedCategory: 'All',
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setProducts, setLoading, setSelectedCategory, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;