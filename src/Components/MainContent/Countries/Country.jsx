import styled from "styled-components";
import { useContext } from "react";

import { ThemeContext } from "../../ThemeContext/themeContext";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { country } = props;
  const themContext = useContext(ThemeContext);

  return (
    <Link to={`/country/${country.name}`}>
      <CountriesCard className={themContext.theme}>
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <CountriesInfo>
          <h3>{country.name}</h3>
          <div>
            Population:
            <span> {country.population}</span>
          </div>
          <div>
            region:
            <span> {country.region}</span>
          </div>
          <div>
            Capital:
            <span> {country.capital}</span>
          </div>
        </CountriesInfo>
      </CountriesCard>
    </Link>
  );
};

export default Country;

const CountriesCard = styled.div`
  max-width: 420px;
  width: 100%;
  filter: brightness(1);
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 12px;
  user-select: none;

  &:hover {
    filter: brightness(0.9);
  }

  &:hover img {
    transform: scale(1.1);
  }

  .flag {
    width: 100%;
    height: 160px;
    display: block;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s linear;
      cursor: pointer;
    }
  }
`;

const CountriesInfo = styled.div`
  padding: 10px 16px;

  h3 {
    margin: 16px 0;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
  }

  div {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0;

    span {
      font-weight: 400;
      margin-left: 4px;
    }
  }
`;
