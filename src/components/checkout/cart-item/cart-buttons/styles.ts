import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  margin-top: 4px;
`;

export const Button = styled.button`
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Text = styled.span`
  color: #000;
  font-size: 8px;
  font-weight: 400;
`;

export const QuantityText = styled.span`
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 10px;
  font-weight: 400;
  border-right: 0.2px solid #bfbfbf;
  border-left: 0.2px solid #bfbfbf;
`;
