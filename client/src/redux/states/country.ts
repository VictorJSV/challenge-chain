import { createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { CountryState } from "@src/models";

const initialState: CountryState = {
  status: RequestType.Idle,
  error: null,
  data: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    fetchCountryRequest: (state) => {
      return {
        ...state,
        status: RequestType.Pending,
      };
    },
    fetchCountryFailure: (state, action) => {
      return {
        ...state,
        status: RequestType.Rejected,
        error: action.payload,
      };
    },
    fetchCountrySuccess: (state, action) => {
      return {
        ...state,
        status: RequestType.Resolved,
        data: action.payload,
      };
    },
  },
});

export const {
  fetchCountryFailure,
  fetchCountryRequest,
  fetchCountrySuccess,
} = countrySlice.actions;

export default countrySlice.reducer;
