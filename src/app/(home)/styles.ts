import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2%;
  flex: 1;
`;

export const GridArea = styled.div`
  width: 100%;
  max-width: 938px;
  gap: 22px;
  margin: 116px 0 172px 0;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
`;
