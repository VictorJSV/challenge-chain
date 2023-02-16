import { createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { HomeState } from "@src/models";

const initialState: HomeState = {
  status: RequestType.Idle,
  error: null,
  data: [],
  filterBy: {
    country: "",
    region: ""
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fetchCountriesRequest: (state) => {
      return {
        ...state,
        status: RequestType.Pending,
      };
    },
    fetchCountriesFailure: (state, action) => {
      return {
        ...state,
        status: RequestType.Rejected,
        error: action.payload,
      };
    },
    fetchCountriesSuccess: (state, action) => {
      return {
        ...state,
        status: RequestType.Resolved,
        data: action.payload,
      };
    },
    filterByCountry: (state, action) => {
      state.filterBy.country = action.payload;
    },
    filterByRegion: (state, action) => {
      state.filterBy.region = action.payload;
    },
  },
});

export const {
  fetchCountriesFailure,
  fetchCountriesRequest,
  fetchCountriesSuccess,
  filterByCountry,
  filterByRegion,
} = homeSlice.actions;

export default homeSlice.reducer;
