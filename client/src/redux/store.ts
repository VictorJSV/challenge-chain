import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./states/app";

export interface AppStore {
  app: any;
}

export default configureStore<AppStore>({
  reducer: {
    app: appSlice.reducer
  }
});
