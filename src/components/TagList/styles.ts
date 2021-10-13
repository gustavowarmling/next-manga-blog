import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
`;

export const PopularTagsContainer = styled.div`
  background-color: var(--blue-500);
  padding: 1.2rem;
  max-height: 23rem;
  height: 100%;
  border-radius: 0.5rem;
`;

export const PopularTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
