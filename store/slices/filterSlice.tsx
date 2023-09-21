import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export type FilterState = {
  showFilters: {
    [key: string]: boolean;
    genre: boolean;
    language: boolean;
    author: boolean;
    publisher: boolean;
  };
  filters: {
    [key: string]: string[];
    genre: string[];
    language: string[];
    author: string[];
    publisher: string[];
  };
  isLoading: boolean;
};

const initialState: FilterState = {
  showFilters: {
    genre: true,
    language: false,
    author: false,
    publisher: false,
  },
  filters: {
    genre: [],
    language: [],
    author: [],
    publisher: [],
  },
  isLoading: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setShowFilter: (
      state: FilterState,
      { payload }: PayloadAction<{ filter: string; action: boolean }>
    ) => {
      state.showFilters[payload.filter] = payload.action;
    },

    setFilter: (
      state: FilterState,
      { payload }: PayloadAction<{ filter: string; value: string }>
    ) => {
      const { filter, value } = payload;
      if (state.filters[filter].includes(value)) {
        state.filters[filter] = state.filters[filter].filter(
          (v) => v !== value
        );
      } else {
        state.filters[filter].push(value);
      }
    },
    setIsLoading: (state: FilterState, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    reset: (state: FilterState) => (state = initialState),
  },
});

export const { setShowFilter, setFilter, setIsLoading, reset } =
  filterSlice.actions;
export default filterSlice.reducer;
