import { Country } from "./country";

export interface HomeState {
  status: string;
  error: null | string;
  data: Country[];
  filterBy: {
    country: string,
    region: string
  }
}
