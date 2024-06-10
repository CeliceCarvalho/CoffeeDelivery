import { BuyContainer, CardContainer, CartButton, Counter, Tag } from "./styles";
import ExpressoCremoso from "../../../../assets/Type_Expresso.svg"
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";


export function Card(){
    return(
        <CardContainer>
            <img src={ExpressoCremoso} width={120}/>
            <Tag>
                <span>Tradicional</span>
            </Tag>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <BuyContainer>
                <div>
                    <span>R$</span>
                    <h3>9,90</h3>
                </div>
                <div>
                    <Counter>
                        <Plus/>
                        <p>1</p>
                        <Minus/>
                    </Counter>
                    <CartButton>
                        <ShoppingCart/>
                    </CartButton>
                </div>
            </BuyContainer>
        </CardContainer>
    )
}