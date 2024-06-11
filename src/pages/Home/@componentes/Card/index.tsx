import { Actions, BuyContainer, CardContainer, CartButton, Counter, Price, Tag } from "./styles";
import ExpressoCremoso from "../../../../assets/Type_Expresso.svg"
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";


export function Card(){
    const { colors } = useTheme()

    return(
        <CardContainer>
            <img src={ExpressoCremoso} width={120}/>
            <Tag>
                <span>Tradicional</span>
            </Tag>
            <h2>Expresso Tradicional</h2>
            <h6>O tradicional café feito com água quente e grãos moídos</h6>
            <BuyContainer>
                <Price>
                    <span>R$</span>
                    <h3>9,90</h3>
                </Price>
                <Actions>
                    <Counter>
                        <Minus color={colors.brand.purple_dark}/>
                        <p>1</p>
                        <Plus color={colors.brand.purple_dark}/>
                    </Counter>
                    <CartButton>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButton>
                </Actions>
            </BuyContainer>
        </CardContainer>
    )
}