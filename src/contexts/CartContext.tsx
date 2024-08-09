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
    rua: string,
    numero: number,
    comp: string,
    bairro: string,
    cidade: string,
    uf: string
}

interface CartContextType{
    cart: Cart
    addNewItem: (item: Item) => void
    updateAlreadyAddedItem: (item: Item, indexItem: number) => void
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
                draft.items[action.payload.indexItem].quantity += action.payload.item.quantity
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
    function updateAlreadyAddedItem(item: Item, indexItem: number){
        dispach({
            type: "UPDATE_ITEM",
            payload: {
                item,
                indexItem
            }
        })
    }

  

    function setDeliveryAdress(data: DeliveryAdress){
        setAdress(data)
    }

    const [deliveryAdress, setAdress] = useState({
        cep: "",
        rua: '',
        numero: 0,
        comp:'',
        bairro: '',
        cidade: '',
        uf: '',
    });

    console.log(deliveryAdress)
    return(
        <CartContext.Provider value={{
            addNewItem,
            updateAlreadyAddedItem,
            cart,
            deliveryAdress,
            setDeliveryAdress,
        }}>
            {children}
        </CartContext.Provider>
    )
}




