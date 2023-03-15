import { useContext, useEffect, useRef } from "react";
import {
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobeAsia,
} from "react-icons/fa";
import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";
import Option from "./Option";

const RegionList = [
  { icon: GiWorld, name: "All" },
  { icon: FaGlobeAfrica, name: "Africa" },
  { icon: FaGlobeAmericas, name: "Americas" },
  { icon: FaGlobeEurope, name: "Europe" },
  { icon: GiEarthAsiaOceania, name: "Oceania" },
  { icon: FaGlobeAsia, name: "Asia" },
];

const Options = ({ isShowOptions }) => {
  const themeContext = useContext(ThemeContext);
  const refOptions = useRef(null);

  useEffect(() => {
    const ShowOptions = () => {
      if (isShowOptions) {
        refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
        refOptions.current.style.transform = `scaleY(1)`;
      } else {
        refOptions.current.style.maxHeight = `0`;
        refOptions.current.style.transform = `scaleY(0)`;
      }
    };
    ShowOptions();
    document.addEventListener("resize", ShowOptions);
    return () => {
      document.removeEventListener("resize", ShowOptions);
    };
  }, [isShowOptions]);

  return (
    <OptionPane className={themeContext.theme} ref={refOptions}>
      {RegionList.map((region, index) => (
        <Option region={region} key={index} />
      ))}
    </OptionPane>
  );
};

export default Options;

const OptionPane = styled.div`
  width: 100%;
  margin-top: 2px;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  z-index: 10;
`;
