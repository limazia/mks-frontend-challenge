"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { useCheckoutStore } from "@/shared/store/CheckoutStore";
import { useCartStore } from "@/shared/store/CartStore";
import { formatPrice } from "@/shared/utils/format-price";

import { CartItem } from "./cart-item";

import {
  CheckoutContainer,
  CheckoutMain,
  CheckoutHeader,
  Title,
  ButtonClose,
  CheckoutContent,
  CheckoutFooter,
  ProductsPrice,
  CheckoutButton,
  Text,
} from "./styles";

export function Checkout() {
  const { cart, totalPrice } = useCartStore();
  const [isVisible, setIsVisible] = useCheckoutStore((state) => [
    state.isVisible,
    state.setIsVisible,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        event.target instanceof Element &&
        !event.target.closest(".checkout-container")
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, setIsVisible]);

  return (
    <CheckoutContainer isVisible={isVisible}>
      <CheckoutMain className="checkout-container" isVisible={isVisible}>
        <CheckoutHeader>
          <Title>Carrinho de Compras</Title>
          <ButtonClose onClick={() => setIsVisible(false)}>
            <X size={20} />
          </ButtonClose>
        </CheckoutHeader>

        <CheckoutContent>
          {cart &&
            cart.map((product) => <CartItem key={product.id} data={product} />)}

          {cart && cart.length === 0 && <Text>Carrinho vazio.</Text>}
        </CheckoutContent>

        <CheckoutFooter>
          <ProductsPrice>
            <Text>Total:</Text>
            <Text>{formatPrice(Number(totalPrice()))}</Text>
          </ProductsPrice>

          <CheckoutButton>
            <Text>Finalizar Compra</Text>
          </CheckoutButton>
        </CheckoutFooter>
      </CheckoutMain>
    </CheckoutContainer>
  );
}
