export interface HomeState {
  status: string;
  error: null | string;
  data: Country[];
  filterBy: {
    country: string,
    region: string
  }
}

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string[];
}
