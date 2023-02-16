import { configureStore } from "@reduxjs/toolkit";
import { HomeState } from "@src/models";
import { homeSlice } from "./states/home";

export interface AppStore {
  home: HomeState;
}

export default configureStore<AppStore>({
  reducer: {
    home: homeSlice.reducer,
  },
});
