import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      valueInput !== "" ? navigate(`/search/${valueInput}`) : navigate("/");
    }
  };

  return (
    <SearchPane>
      <h3>Search Country</h3>
      <SearchElement>
        <input
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Input the enter to search..."
        />
        <Link to={valueInput !== "" ? `/search/${valueInput}` : "/"}>
          <div style={{ width: "40px", height: "100%" }}>
            <MdSearch className="icon" />
          </div>
        </Link>
      </SearchElement>
    </SearchPane>
  );
};

export default Search;

const SearchPane = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;

const SearchElement = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 34px;
  background-color: #fff;
  box-shadow: var(--BoxShadow);
  border-radius: 4px;
  overflow: hidden;

  .icon {
    height: 100%;
    width: 100%;
    padding: 2px;
    text-align: center;
    background-color: #aaa !important;
    box-shadow: none !important;
    opacity: 75%;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  input {
    border: 0;
    outline: none;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    margin: 0 8px;
  }
`;
