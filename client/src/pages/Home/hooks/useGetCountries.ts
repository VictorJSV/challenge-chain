import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchCountriesFailure,
  fetchCountriesRequest,
  fetchCountriesSuccess,
} from "@src/redux/states/home";
import { AppStore } from "../../../redux/store";
import { getCountries } from "../services/country.service";

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

  const data = useSelector((state: AppStore) => {
    let all = state.home.data;
    const filterBy = state.home.filterBy;
    if (filterBy.region.length) {
      all = all.filter((x) => x.region === filterBy.region);
    }
    if (filterBy.country.length) {
      all = all.filter((x) =>
        x.name.common.toLowerCase().includes(filterBy.country.toLowerCase())
      );
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
