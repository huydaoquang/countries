import styled from "styled-components";
import { useContext } from "react";

import { ThemeContext } from "../../ThemeContext/themeContext";

const Country = () => {
  const themContext = useContext(ThemeContext);

  return (
    <CountriesCard className={themContext.theme}>
      <div className="flag">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
          alt=""
        />
      </div>
      <CountriesInfo>
        <h3>Afghanistan</h3>
        <div>
          Population:
          <span>123,456,768</span>
        </div>
        <div>
          region
          <span>asia:</span>
        </div>
        <div>
          Capital
          <span> kabul:</span>
        </div>
      </CountriesInfo>
    </CountriesCard>
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
    }
  }
`;
