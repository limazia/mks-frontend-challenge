import { Minus, Plus } from "lucide-react";

import { useCartStore } from "@/shared/store/CartStore";

import { Container, Text, Button, QuantityText } from "./styles";

interface CartButtonsProps {
  productId: number;
}

export function CartButtons({ productId }: CartButtonsProps) {
  const [cart, increase, decrease] = useCartStore((state) => [
    state.cart,
    state.increase,
    state.decrease,
  ]);

  function handleDecreaseProductQuantityClick() {
    if (quantity > 1) {
      decrease(productId);
    }
  }

  function handleIncreaseProductQuantityClick() {
    increase(productId);
  }

  const item = cart.find((item) => item.id === productId);
  const quantity = item ? item.count : 0;

  return (
    <div>
      <Text>Qtd:</Text>
      <Container>
        <Button onClick={handleDecreaseProductQuantityClick} disabled={quantity === 1}>
          <Minus size={10} />
        </Button>
        <QuantityText>{quantity}</QuantityText>
        <Button onClick={handleIncreaseProductQuantityClick}>
          <Plus size={10} />
        </Button>
      </Container>
    </div>
  );
}
