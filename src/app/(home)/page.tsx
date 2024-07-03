"use client";

import { useProduct } from "@/shared/hooks/useProduct";

import { Container, GridArea } from "./styles";

import { Checkout } from "@/components/checkout";
import { Header } from "@/components/header";
import { ProductCard, ProductCardSkeleton } from "@/components/product-card";
import { Footer } from "@/components/footer";

export default function Home() {
  const { result, isLoadingProducts } = useProduct();

  return (
    <>
      <Header />
      <Checkout />

      <Container>
        <GridArea>
          {isLoadingProducts && !result && <ProductCardSkeleton />}

          {result &&
            result.products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}

          {result && result.products.length === 0 && (
            <h2>Nenhum resultado encontrado.</h2>
          )}
        </GridArea>
      </Container>

      <Footer />
    </>
  );
}
