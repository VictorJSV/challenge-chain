import { RequestType } from "@src/const/request";

export const SOMALIA = {
  name: {
    common: "Somalia",
  },
  borders: ["DJI", "ETH", "KEN"],
  flags: {
    svg: "https://flagcdn.com/so.svg",
  },
  population: 15893219,
  region: "Africa",
  subregion: "Eastern Africa",
  independent: true,
  capital: ["Mogadishu"],
  cca3: "SOM",
  languages: {
    ara: "Arabic",
    som: "Somali",
  },
};

export const countryStateMock = {
  status: RequestType.Idle,
  error: null,
  data: [
    {
      name: {
        common: "Iceland",
      },
      flags: {
        svg: "https://flagcdn.com/is.svg",
      },
      population: 366425,
      region: "Europe",
      subregion: "Northern Europe",
      independent: true,
      capital: ["Reykjavik"],
      cca3: "ISL",
      languages: {
        isl: "Icelandic",
      },
    },
    SOMALIA,
  ],
  filterBy: {
    country: "",
    region: "",
  },
};
