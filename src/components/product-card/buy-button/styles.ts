import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: #0f52ba;
  color: #fff;
  border-radius: 0px 0px 8px 8px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;
`;
