import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchCountryFailure,
  fetchCountryRequest,
  fetchCountrySuccess,
} from "@src/redux/states/country";
import { AppStore } from "../../../redux/store";
import { getCountry } from "@src/services/country.service";
import { Country, CountryDetail } from "@src/models";

export const useGetCountry = () => {
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (store: AppStore) => store.country
  );
  const { data: countriesList } = useSelector((store: AppStore) => store.home);

  const hydrateCountry = (country: Country): CountryDetail => ({
    source: country,
    borderCountries:
      country.borders &&
      country.borders.map((x) => ({
        code: x,
        name: countriesList.length
          ? (countriesList.find((c) => c.cca3 === x) as Country).name.common
          : x,
      })),
  });

  const doRequest = async (code: string) => {
    try {
      dispatch(fetchCountryRequest());
      const result = await getCountry(code);
      dispatch(fetchCountrySuccess(hydrateCountry(result[0])));
    } catch (error) {
      dispatch(fetchCountryFailure(error));
    }
  };

  return {
    doRequest,
    status,
    data,
    error,
  };
};
