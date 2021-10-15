import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: fit-content;
  display: flex;
  gap: 20px;
  height: 3rem;
`;

export const SearchBoxContainer = styled.label`
  max-width: 36rem;
  width: 100%;
  display: grid;
  grid-template-columns: 19fr 1fr;
  grid-gap: 5px;
  align-items: center;

  background: #1c2230;

  padding: 0.2rem 0.8rem;
  border-radius: 8px;

  transition: all 0.3s ease-out;

  input {
    padding: 0.2rem;
    border: none;
    background: #1c2230;
    height: 100%;
    color: #fff;
    font-size: 1rem;
  }

  svg {
    font-size: 1.5rem;
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AdvancedFilter = styled.button`
  background-color: var(--blue-300);
  color: var(--title);
  border: none;
  padding: 1rem;
  border-radius: 0.4rem;
  transition: 0.4s;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
