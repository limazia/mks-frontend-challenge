import Image from "next/image";
import styled from "styled-components";

export const Product = styled.div`
  position: relative;
  width: 100%;
  max-width: 379px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 22px;
  padding: 0 23px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const ImageProduct = styled(Image)`
  width: 46px;
  height: 57px;
  object-fit: contain;
  margin-right: 21px;
`;

export const ProductName = styled.p`
  max-width: 113px;
  color: #2c2c2c;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const PriceArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Price = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const Icon = styled.button`
  width: 100%;
  width: 25px;
  height: 25px;
  margin-top: -90px;
  margin-right: -30px;
  z-index: 5;
  background: #000;
  color: #fff;
  border: 0;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;
