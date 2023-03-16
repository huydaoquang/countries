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

export const getCountryByName = (name) => async (dispatch) => {
  await axios
    .get(`${countriesApi}/name/${name}`)
    .then((res) => {
      dispatch({ type: Types.GET_COUNTRY_BY_NAME, payload: res.data[0] });
    })
    .catch((error) => console.log("get country by name api error", error));
};

export const getCountriesByRegion = (regionName) => async (dispatch) => {
  await axios
    .get(`${countriesApi}/region/${regionName}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        region: country.region,
        population: new Intl.NumberFormat().format(country.population),
        flag: country.flag,
      }));
      dispatch({ type: Types.GET_COUNTRIES_BY_REGION, payload: countries });
    })
    .catch((err) => console.log("get country by region api error", err));
};

export const getCountriesByName = (name) => async (dispatch) => {
  await axios
    .get(`${countriesApi}/name/${name}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        region: country.region,
        population: new Intl.NumberFormat().format(country.population),
        flag: country.flag,
      }));
      dispatch({ type: Types.GET_COUNTRIES_BY_NAME, payload: countries });
    })
    .catch((err) => console.log("get country by name api error", err));
};
