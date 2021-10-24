import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-bg);
  color: var(--colors-text);
`;

export const Search = ({ searchText, onSearch, ...props }) => {

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={ev => onSearch(ev.target.value)} value={searchText} {...props} />
    </InputContainer>
  );
}
