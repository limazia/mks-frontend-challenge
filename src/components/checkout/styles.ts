import styled, { css } from "styled-components";

type CheckoutProps = Pick<{ isVisible: boolean }, "isVisible">;

export const CheckoutContainer = styled.div<CheckoutProps>`
  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const CheckoutMain = styled.section<CheckoutProps>`
  position: fixed;
  overflow-y: auto;
  z-index: 5;
  top: 0;
  right: 0;

  width: 486px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #0f52ba;
  color: #fff;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateX(468px);

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    `}
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 70px;
  padding: 0 47px;
`;

export const Title = styled.h3`
  font-size: 27px;
  font-weight: 700;
  max-width: 180px;
`;

export const CheckoutContent = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductsPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 47px;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;

export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: #ffffff;
  border: 0;
  padding: 40px 0;
`;

export const ButtonClose = styled.button`
  width: 38px;
  height: 38px;
  background: #000000;
  color: #ffffff;
  border: 0;
  border-radius: 50%;
  font-size: 25px;
  font-weight: 400;
  line-height: 15px;
  cursor: pointer;
`;