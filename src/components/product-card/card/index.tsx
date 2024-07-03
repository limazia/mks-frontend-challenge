import { ShoppingBag } from "lucide-react";

import { Product } from "@/shared/interfaces/Product";
import { formatPrice } from "@/shared/utils/format-price";
import { useCartStore } from "@/shared/store/CartStore";

import {
  Card,
  CardContent,
  ImageContainer,
  ImageProduct,
  HeadingArea,
  Description,
  Name,
  Price,
  BuyButton,
} from "./styles";

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const { add } = useCartStore();

  function handleAddToCart() {
    add(data);
  }

  return (
    <Card>
      <ImageContainer>
        <ImageProduct
          src={data?.photo}
          alt={data?.name}
          width={111}
          height={138}
          priority
        />
      </ImageContainer>
      <CardContent>
        <HeadingArea>
          <Name>{data?.name}</Name>
          <Price>{formatPrice(Number(data?.price))}</Price>
        </HeadingArea>

        <Description>{data?.description}</Description>
      </CardContent>

      <BuyButton
        type="button"
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
      >
        <ShoppingBag size={20} />
        Comprar
      </BuyButton>
    </Card>
  );
}
