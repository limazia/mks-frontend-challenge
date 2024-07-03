import { ComponentProps } from "react";

import { Button } from "./styles";

interface BuyButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  as?: any;
}

export function BuyButton({ children, ...rest }: BuyButtonProps) {
  return (
    <Button whileTap={{ scale: 0.95 }} {...rest}>
      {children}
    </Button>
  );
}
