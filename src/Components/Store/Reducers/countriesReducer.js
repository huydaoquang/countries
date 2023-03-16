import * as Types from "../types";

const CountriesReducerInitialState = {
  countries: [],
};
const CountriesReducer = (state = CountriesReducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_COUNTRIES:
      return { ...state, countries: payload };

    default:
      return state;
  }
};

export default CountriesReducer;
