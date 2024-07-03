import styled from "styled-components";

import { Skeleton } from "@/components/ui/skeleton";

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  width: 100%;
  max-width: 217px;
  height: 100%;
  max-height: 285px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardContent = styled.div`
  padding: 0 14px 12px 14px;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 1 / 1;
`;

export const HeadingArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ImageProduct = styled(Skeleton)`
  height: 150px;
  width: 90%;
  border-radius: 5px;
`;

export const Name = styled(Skeleton)`
  height: 30px;
  width: 130px;
  border-radius: 5px;
`;

export const Price = styled(Skeleton)`
  height: 30px;
  width: 50px;
  border-radius: 5px;
`;

export const Description = styled(Skeleton)`
  height: 20px;
  width: 100%;
  border-radius: 5px;
`;

export const BuyButton = styled(Skeleton)`
  height: 50px;
  width: 100%;
`;
