import { Actions, BuyContainer, CardContainer, CartButton, Counter, Price, Tag, Tags } from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
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
    id: string,
    name: string
}

interface Cart{
    id: string,
    quantity: number,
}

export function Card({coffee}: Props){
    const { colors } = useTheme()
    const [ Quantity, setQuantity ] = useState<number>(0)
    const [ Cart, setCart ] = useState<Cart[]>([])

    function handleAddQuantity(){
        setQuantity(Quantity + 1)
    }

    function handleRemoveQuantity(){
        setQuantity(Quantity - 1)
    }

    function handleAddToCart(){
        const newItem: Cart = {
            id: coffee.id,
            quantity: Quantity,
        }

        setCart((state) => [...state, newItem])
    }

    console.log(Cart)

    return(
        <CardContainer>
            <img src={coffee.imgSrc} width={120}/>
            <Tags>
                {coffee.tag.map((tag) => (
                    <Tag key={tag.id}>
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
                        <div>
                            <Minus color={colors.brand.purple_dark} onClick={handleRemoveQuantity}/>
                        </div>
                        <p>{Quantity}</p>
                        <div>
                            <Plus color={colors.brand.purple_dark} onClick={handleAddQuantity}/>
                        </div>
                    </Counter>
                    <CartButton onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButton>
                </Actions>
            </BuyContainer>
        </CardContainer>
    )
}