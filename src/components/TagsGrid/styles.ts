import styled from "styled-components";

export const TagsGridContainer = styled.div`
  width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;

export const TagsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 140px);
  gap: 1.5rem;
`;