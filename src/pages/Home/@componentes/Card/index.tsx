import { Actions, BuyContainer, CardContainer, CartButton, Counter, Price, Tag, Tags } from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

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

interface Item{
    id: string,
    quantity: number,
}

export function Card({coffee}: Props){
    const { addNewItem, updateAlreadyAddedItem, cart } = useContext(CartContext)
    const [ Quantity, setQuantity ] = useState<number>(0)

    function handleAddQuantity(){
        setQuantity(Quantity + 1)
    }

    function handleRemoveQuantity(){
        setQuantity(Quantity - 1)
    }
    
    function updateCart(){
        const newItem: Item = {
            id: coffee.id, 
            quantity: Quantity
        }
        console.log(cart)
        
        const isAlreadyAdded = cart.items.findIndex((item) => item.id == newItem.id)

        if(isAlreadyAdded >= 0){
            updateAlreadyAddedItem(newItem, isAlreadyAdded)
        } else {
            addNewItem(newItem)
        }
    }

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
                            <Minus onClick={handleRemoveQuantity}/>
                        </div>
                        <p>{Quantity}</p>
                        <div>
                            <Plus onClick={handleAddQuantity}/>
                        </div>
                    </Counter>
                    <CartButton onClick={updateCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButton>
                </Actions>
            </BuyContainer>
        </CardContainer>
    )
}