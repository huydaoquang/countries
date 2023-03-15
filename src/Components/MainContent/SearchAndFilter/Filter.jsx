import { useContext } from "react";
import {
  FaChevronDown,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeEurope,
} from "react-icons/fa";
import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";

const Filter = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <FilterPane>
      <h3>Filter by region:</h3>
      <SelectPane>
        <Select className={themeContext.theme}>
          <span>All</span>
          <FaChevronDown />
        </Select>
        <OptionPane className={themeContext.theme}>
          <OptionItem>
            <GiWorld />
            <span>All</span>
          </OptionItem>
          <OptionItem>
            <FaGlobeAfrica />
            <span>Africa</span>
          </OptionItem>
          <OptionItem>
            <FaGlobeAmericas />
            <span>Americas</span>
          </OptionItem>
          <OptionItem>
            <FaGlobeAfrica />
            <span>Asia</span>
          </OptionItem>
          <OptionItem>
            <FaGlobeEurope />
            <span>Europe</span>
          </OptionItem>
          <OptionItem>
            <GiEarthAsiaOceania />
            <span>Oceania</span>
          </OptionItem>
        </OptionPane>
      </SelectPane>
    </FilterPane>
  );
};

export default Filter;

const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;

const SelectPane = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
  background-color: #ccc;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 8px;
  height: 34px;
  user-select: none;
  cursor: pointer;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const OptionPane = styled.div`
  width: 100%;
  margin-top: 2px;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  z-index: 10;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    font-weight: bold;
    background-color: var(--SelectOptionBackground);
  }

  span {
    margin-left: 4px;
  }
`;
