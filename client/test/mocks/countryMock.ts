import { RequestType } from "@src/const/request";
import { Country } from "@src/models";

export const SOMALIA: Country = {
  name: {
    common: "Somalia",
    nativeName: {
      ara: { official: "جمهورية الصومال‎‎", common: "الصومال‎‎" },
      som: {
        official: "Jamhuuriyadda Federaalka Soomaaliya",
        common: "Soomaaliya",
      },
    },
  },
  tld: [".so"],
  currencies: { SOS: { name: "Somali shilling", symbol: "Sh" } },
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
        nativeName: { isl: { official: "Ísland", common: "Ísland" } },
      },
      tld: [".is"],
      currencies: { ISK: { name: "Icelandic króna", symbol: "kr" } },
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
