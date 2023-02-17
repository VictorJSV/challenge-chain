import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountriesFailure,
  fetchCountriesRequest,
  fetchCountriesSuccess,
} from "@src/redux/states/home";
import { AppStore } from "@src/redux/store";
import { getCountries } from "@src/services/country.service";
import { Country } from "@src/models";

export const useGetCountries = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((store: AppStore) => store.home);

  const doRequest = async () => {
    try {
      dispatch(fetchCountriesRequest());
      const result = await getCountries();
      dispatch(fetchCountriesSuccess(result));
    } catch (error) {
      dispatch(fetchCountriesFailure(error));
    }
  };

  const data = useSelector((state: AppStore): Country[] => {
    const filterBy = state.home.filterBy;
    let all = state.home.data;
    if (filterBy.region.length) {
      all = all.filter((x) => x.region === filterBy.region);
    }
    if (filterBy.country.length) {
      const reg = new RegExp(filterBy.country.toLowerCase(), "i");
      all = all.filter((x) => reg.test(x.name.common));
    }
    return all;
  });

  return {
    doRequest,
    status,
    data,
    error,
  };
};

