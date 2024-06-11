import { Actions, BuyContainer, CardContainer, CartButton, Counter, Price, Tag, Tags } from "./styles";
import ExpressoCremoso from "../../../../assets/Type_Expresso.svg"
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

interface Props{
    coffee:{
        id: string,
        name: string,
        imgSrc: string,
        tag: Tag[],
        description: string,
        price: number,
    } 
}

interface Tag{
    name: string
}

export function Card({coffee}: Props){
    const { colors } = useTheme()

    return(
        <CardContainer>
            <img src={coffee.imgSrc} width={120}/>
            <Tags>
                {coffee.tag.map((tag) => (
                    <Tag>
                        <span>{tag.name}</span>
                    </Tag>
                ))}
            </Tags>
            <h2>{coffee.name}</h2>
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