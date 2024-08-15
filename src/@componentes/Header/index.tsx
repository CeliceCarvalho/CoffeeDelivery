import { ActionsContainer, CartContainer, HeaderContainer, LocationTagContainer, ItemsQuantity } from "./styles";
import LogoCoffee from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function Header(){
    const { cart } = useContext(CartContext)

    function totalNumberOfItems(){
        let total = 0
        cart.items.map(item => {
            return total+=item.quantity
        })
        return total
    }

    return(
        <HeaderContainer>
            <NavLink to="/">
                <img src={LogoCoffee}/>
            </NavLink>
            <ActionsContainer>
                <LocationTagContainer>
                    <MapPin size={22} weight="fill"/>
                    <p>Porto Alegre, RS</p>
                </LocationTagContainer>
                <NavLink to="/checkout" title="Complete seu pedido">
                    <CartContainer>
                        <ShoppingCart size={22} weight="fill"/>
                        {cart.items.length > 0 ? <ItemsQuantity>{totalNumberOfItems()}</ItemsQuantity> : null}
                    </CartContainer>
                </NavLink>
            </ActionsContainer>
        </HeaderContainer>
    )
}
