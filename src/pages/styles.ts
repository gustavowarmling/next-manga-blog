import styled from "styled-components";

export const Container = styled.main`
  margin-top: 4rem;

  @media (max-width: 1120px) {
    padding: 0 0.8rem;
  }
`;
export const ContentContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  justify-items: center;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
