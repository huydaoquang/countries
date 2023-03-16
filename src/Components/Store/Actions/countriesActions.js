import axios from "axios";
import * as Types from "../types";

const countriesApi = "https://restcountries.com/v2";

export const getCountries = () => async (dispatch) => {
  await axios
    .get(countriesApi + "/all")
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        region: country.region,
        population: new Intl.NumberFormat().format(country.population),
        flag: country.flag,
      }));
      dispatch({ type: Types.GET_COUNTRIES, payload: countries });
    })
    .catch((error) => console.log("get countries api error:", error));
};
