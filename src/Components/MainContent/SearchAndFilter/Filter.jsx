import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";
import Options from "./Options";

const Filter = () => {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState("All");

  // console.log(regionName);

  const handleOptions = (e) => {
    if (refSelect.current)
      setIsShowOptions(refSelect.current.contains(e.target));
  };

  useEffect(() => {
    if (regionName) setValueOption(regionName);
    else setValueOption("All");
  }, [regionName]);

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);
      return () => {
        document.removeEventListener("click", handleOptions);
      };
    }
  }, [isShowOptions]);

  return (
    <FilterPane>
      <h3>Filter by region:</h3>
      <SelectPane>
        <Select
          className={themeContext.theme}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <FaChevronDown />
        </Select>
        <Options isShowOptions={isShowOptions} />
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
