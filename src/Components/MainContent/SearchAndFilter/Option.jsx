import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Option = (props) => {
  const { region } = props;
  const navigate = useNavigate();

  const handleValueOption = () => {
    if (region.name !== "All") navigate(`/region/${region.name}`);
    else navigate("/");
  };

  return (
    <OptionItem onClick={handleValueOption}>
      <region.icon />
      <span>{region.name}</span>
    </OptionItem>
  );
};

export default Option;

const OptionItem = styled.li`
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
    margin-left: 6px;
  }
`;
