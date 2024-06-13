import { Actions, BuyContainer, CardContainer, CartButton, Counter, Price, Tag, Tags } from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { useTheme } from "styled-components";
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
    const { addNewItem, cart } = useContext(CartContext)

    const { colors } = useTheme()
    const [ Quantity, setQuantity ] = useState<number>(0)
    const [ item, setItem ] = useState<Item>({
        id: coffee.id,
        quantity: 0
    })

    console.log(cart)

    function handleAddQuantity(){
        setQuantity(Quantity + 1)
    }

    function handleRemoveQuantity(){
        setQuantity(Quantity - 1)
    }
    
    function AddNew(){
        addNewItem({id: coffee.id, quantity: Quantity})
    }
    function handleUpdateQuantity(){
        const updatedQuantity = Quantity + item.quantity

        setItem(state => ({...state, quantity: updatedQuantity}))

        /*const isNewItem =  cart.find( item => newItem.id == item.id)
        console.log(isNewItem)

        const itemAlreadyAdded = cart.find(item => newItem.id == item.id)

        const indexItem = cart.findIndex(item => newItem.id == item.id)


        if(itemAlreadyAdded){
            console.log("item já adicionado")
            const updated: Cart = {
                id: cart[indexItem].id,
                quantity: cart[indexItem].quantity += Quantity
            }
            itemAlreadyAdded.quantity += Quantity
            cart[indexItem].quantity += Quantity
            setCart(state => [...state, updated])
            
        } else {
            console.log('item novo')
            setCart((state) => [...state, newItem])
            produce(cart, draft=>{
                console.log(draft[0])
                draft.push(newItem)
            })
        }*/
        
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
                            <Minus color={colors.brand.purple_dark} onClick={handleRemoveQuantity}/>
                        </div>
                        <p>{Quantity}</p>
                        <div>
                            <Plus color={colors.brand.purple_dark} onClick={handleAddQuantity}/>
                        </div>
                    </Counter>
                    <CartButton onClick={AddNew}>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButton>
                </Actions>
            </BuyContainer>
        </CardContainer>
    )
}