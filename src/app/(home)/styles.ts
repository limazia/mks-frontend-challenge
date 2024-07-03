import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 0.5rem;

  @media (max-width: 48rem) {
    padding: 0 1rem;
  }
`;

export const GridArea = styled.div`
  width: 100%;
  max-width: 938px;
  margin: 116px 0 172px 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
