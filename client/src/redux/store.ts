import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import { countrySlice } from "./states/country";
import { homeSlice } from "./states/home";

const rootReducer = combineReducers({
  home: homeSlice.reducer,
  country: countrySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
