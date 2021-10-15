import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 4rem auto 6rem;

  @media (max-width: 1120px) {
    padding: 0 0.8rem;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  justify-items: center;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
