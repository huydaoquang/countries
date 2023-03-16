import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";
import CountryInfo from "./CountryInfo";
import { getCountryByName } from "../../Store/Actions/countriesActions";

const CountryDetail = (props) => {
  const themContext = useContext(ThemeContext);
  const slug = useParams();
  const navgate = useNavigate();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.Countries.country);

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [dispatch, slug.countryName]);

  return (
    <Wrapper>
      <div
        onClick={() => navgate(-1)}
        className={`goBack-btn ${themContext.theme}`}
      >
        Go back
      </div>
      <CountryContainer>
        <div className="flagCountry">
          <img
            src={
              country
                ? country.flag
                : "https://via.placeholder.com/300*200?text=Image+Error"
            }
            alt=""
          />
        </div>
        <CountryInfo />
      </CountryContainer>
    </Wrapper>
  );
};

export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;

  .goBack-btn {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    filter: brightness(0.9);
    transition: all 0.2s linear;

    &:hover {
      filter: brightness(1);
      font-weight: bold;
      cursor: default;
      user-select: none;
    }
  }
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  .flagCountry {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
    box-shadow: var(--BoxShadow);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
