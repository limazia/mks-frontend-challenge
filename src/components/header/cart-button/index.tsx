"use client";

import { ComponentProps, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

import { useCartStore } from "@/shared/store/CartStore";

import { Button, CartIcon, CartText } from "./styles";
import { useCheckoutStore } from "@/shared/store/CheckoutStore";

interface CartButtonProps extends ComponentProps<"button"> {}

export function CartButton({ ...rest }: CartButtonProps) {
  const [isVisible, setIsVisible] = useCheckoutStore((state) => [
    state.isVisible,
    state.setIsVisible,
  ]);
  const { count: itemCount } = useCartStore();

  return (
    <Button onClick={() => setIsVisible(!isVisible)} {...rest}>
      <CartIcon>
        <ShoppingCart size={20} />
      </CartIcon>

      <motion.div
        key={itemCount()}
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <CartText>{itemCount()}</CartText>
      </motion.div>
    </Button>
  );
}
