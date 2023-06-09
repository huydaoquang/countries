import styled from "styled-components";
import Filter from "./Filter";
import Search from "./Search";

const SearchAndFilter = () => {
  return (
    <SearchAndFilterPane>
      <Search />
      <Filter />
    </SearchAndFilterPane>
  );
};

export default SearchAndFilter;

const SearchAndFilterPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
