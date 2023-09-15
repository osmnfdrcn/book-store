import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IApp {
  showSearchBar: boolean;
  showFilters: boolean;
}

const initialState: IApp = {
  showSearchBar: false,
  showFilters: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowSearchBar: (state: IApp, { payload }: PayloadAction<boolean>) => {
      state.showSearchBar = payload;
    },
    setShowFilters: (state: IApp, { payload }: PayloadAction<boolean>) => {
      state.showFilters = payload;
    },
  },
});

export const { setShowSearchBar, setShowFilters } = appSlice.actions;
export default appSlice.reducer;
