export interface HomeState {
  status: string;
  error: null | string;
  data: Country[];
  filterBy: {
    country: string,
    region: string
  }
}

export interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  independent: boolean;
  capital: string[];
  languages: {
    [key: string]: string;
  };
}
