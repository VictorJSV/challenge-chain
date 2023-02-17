import { RequestType } from "@src/const/request";

export const countryStateMock = {
  status: RequestType.Idle,
  error: null,
  data: [
    {
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
    },
  ],
  filterBy: {
    country: "",
    region: "",
  },
};
