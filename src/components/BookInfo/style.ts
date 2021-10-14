import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: var(--blue-500);
  padding: 1.4rem;
  border-radius: 0.4rem;
`;

export const Info = styled.div`
  span {
    color: var(--subtitle);
    display: block;
    margin-bottom: 4px;
  }

  p {
    color: var(--description);
    margin-left: 8px;
    margin-bottom: 16px;
  }

  a {
    color: var(--description);
    display: block;
    margin-left: 8px;
    margin-bottom: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TagsContainer = styled.div`
  p {
    margin-bottom: 8px;
  }
`;

export const BookTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
