import { configureStore } from "@reduxjs/toolkit";
import { CountryState, HomeState } from "@src/models";
import { countrySlice } from "./states/country";
import { homeSlice } from "./states/home";

export interface AppStore {
  home: HomeState;
  country: CountryState;
}

export default configureStore<AppStore>({
  reducer: {
    home: homeSlice.reducer,
    country: countrySlice.reducer,
  },
});
