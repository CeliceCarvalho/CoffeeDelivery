import { produce } from "immer";
import { ReactNode, createContext, useReducer, useState } from "react";

export const CartContext = createContext({} as CartContextType)

interface Cart{
    items: Item[]
}

interface Item{
    id: string,
    quantity: number,
}

interface DeliveryAdress{
    cep: string,
    street: string,
    number: number,
    comp: string,
    neighborhood: string,
    city: string,
    uf: string,
    paymentType: string,
}

interface CartContextType{
    cart: Cart
    addNewItem: (item: Item) => void
    updateAlreadyAddedItem: (item: Item) => void
    removeItem: (item: Item) => void
    deliveryAdress: DeliveryAdress
    setDeliveryAdress: (data: DeliveryAdress) => void
}

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps){

    const [cart, dispach] = useReducer((state: Cart, action: any) => {
        if(action.type == "ADD_NEW_ITEM"){
            return produce(state, draft => {
                draft.items.push(action.payload.item)
            })
        }
        if(action.type == "UPDATE_ITEM"){
            return produce(state, draft => {
                const indexItem = draft.items.findIndex(item => item.id === action.payload.item.id)
                draft.items[indexItem].quantity = action.payload.item.quantity
            })
        }
        if(action.type === "REMOVE_ITEM"){
            return produce(state, draft => {
                const indexItem = draft.items.findIndex(item => item.id === action.payload.item.id)
                draft.items.splice(indexItem)
            })
        }

        return state
    },{
        items:[]
    })

    function addNewItem(item: Item){
        dispach({
            type: "ADD_NEW_ITEM",
            payload: {
                item,
            }
        })
    }
    
    function updateAlreadyAddedItem(item: Item){
        dispach({
            type: "UPDATE_ITEM",
            payload: {
                item
            }
        })
    }

    function removeItem(item: Item){
        dispach({
            type: "REMOVE_ITEM",
            payload:{
                item
            }
        })
    }

    function setDeliveryAdress(data: DeliveryAdress){
        setAdress(data)
    }

    const [deliveryAdress, setAdress] = useState({
        cep: "",
        street: '',
        number: 0,
        comp:'',
        neighborhood: '',
        city: '',
        uf: '',
        paymentType: '',
    });

    console.log(deliveryAdress)
    return(
        <CartContext.Provider value={{
            addNewItem,
            updateAlreadyAddedItem,
            cart,
            deliveryAdress,
            setDeliveryAdress,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}




