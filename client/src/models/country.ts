export interface CountryState {
  status: string;
  error: string | null;
  data: CountryDetail | null;
}

export interface Country {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld: string[];
  borders?: string[];
  cca3: string;
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

export interface CountryDetail {
  source: Country;
  borderCountries?: {
    code: string;
    name: string;
  }[];
  nativeName: string;
  languages: string;
  currencies: string;
}
