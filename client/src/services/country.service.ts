import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";

export const getCountries = () => {
  return axios.get(baseUrl + "/all").then((res) => res.data);
};

export const getCountry = (code: string) => {
  return axios.get(baseUrl + "/alpha/" + code).then((res) => res.data);
};

export const getRegions = () => {
  return [
    { id: "1", label: "Africa" },
    { id: "2", label: "Americas" },
    { id: "3", label: "Asia" },
    { id: "4", label: "Europe" },
    { id: "5", label: "Oceania" },
  ];
};
