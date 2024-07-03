import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f52ba;
  padding: 0 5%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 15px 5%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const HeadingH2 = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeadingP = styled.p`
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
