import { ActionsContainer, CartContainer, HeaderContainer, LocationTagContainer, ItemsQuantity } from "./styles";
import LogoCoffee from "../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} />
      <ActionsContainer>
        <LocationTagContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocationTagContainer>
        <CartContainer>
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </ActionsContainer>
    </HeaderContainer>
  );
}
