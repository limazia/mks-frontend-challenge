import { CartButton } from "./cart-button";

import { HeaderContainer, Logo, HeadingH2, HeadingP } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <HeadingH2>MKS</HeadingH2>
        <HeadingP>Sistemas</HeadingP>
      </Logo>

      <CartButton />
    </HeaderContainer>
  );
}
