import styled from "styled-components";

export const PagesPreviewContainer = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;

export const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  img {
    max-height: 200px;
    max-width: 100%;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;
