import { Country } from "./country";

export interface HomeState {
  status: string;
  error: string | null;
  data: Country[];
  filterBy: {
    country: string,
    region: string
  }
}
