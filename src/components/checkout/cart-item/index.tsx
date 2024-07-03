import { X } from "lucide-react";

import { Product as ProductProps } from "@/shared/interfaces/Product";
import { useCartStore } from "@/shared/store/CartStore";
import { formatPrice } from "@/shared/utils/format-price";

import { CartButtons } from "./cart-buttons";

import {
  Product,
  ImageContainer,
  ImageProduct,
  ProductName,
  PriceArea,
  Price,
  Icon,
} from "./styles";

interface CartItemProps {
  data: ProductProps;
}

export function CartItem({ data }: CartItemProps) {
  const { remove } = useCartStore();

  function handleRemoveProductClick() {
    remove(data.id);
  }

  return (
    <Product>
      <ImageContainer>
        <ImageProduct
          src={data?.photo}
          alt={data?.name}
          width={0}
          height={0}
          sizes="100vw"
        />
        <ProductName>{data?.name}</ProductName>
      </ImageContainer>

      <PriceArea>
        <CartButtons productId={data?.id} />
        <Price>{formatPrice(Number(data?.price))}</Price>
      </PriceArea>

      <Icon onClick={handleRemoveProductClick}>
        <X size={15} />
      </Icon>
    </Product>
  );
}
