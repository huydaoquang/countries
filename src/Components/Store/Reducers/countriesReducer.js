import * as Types from "../types";

const CountriesReducerInitialState = {
  countries: [],
  country: null,
};
const CountriesReducer = (state = CountriesReducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_COUNTRIES:
      return { ...state, countries: payload };

    case Types.GET_COUNTRY_BY_NAME:
      return { ...state, country: payload };

    case Types.GET_COUNTRIES_BY_REGION:
      return { ...state, countries: payload };

    case Types.GET_COUNTRIES_BY_NAME:
      return { ...state, countries: payload };

    default:
      return state;
  }
};

export default CountriesReducer;
