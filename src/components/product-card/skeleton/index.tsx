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

export function ProductCardSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Card key={i}>
            <ImageContainer>
              <ImageProduct />
            </ImageContainer>
            <CardContent>
              <HeadingArea>
                <Name />
                <Price />
              </HeadingArea>

              <Description />
            </CardContent>

            <BuyButton />
          </Card>
        );
      })}
    </>
  );
}
