import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue-500);
  position: relative;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    padding: 0 0.8rem;
  }
`;

export const LogoWrapper = styled.div`
  max-width: 200px;
`;
