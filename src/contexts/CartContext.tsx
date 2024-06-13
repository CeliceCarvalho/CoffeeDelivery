import { produce } from "immer";
import { ReactNode, createContext, useReducer } from "react";

export const CartContext = createContext({} as CartContextType)

interface Cart{
    items: Item[]
}

interface Item{
    id: string,
    quantity: number,
}

interface CartContextType{
    cart: Cart
    addNewItem: (item: Item) => void
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

        return state
    },{
        items:[]
    })

    function addNewItem(item: Item){
        dispach({
            type: "ADD_NEW_ITEM",
            payload: item
        })
    }

    return(
        <CartContext.Provider value={{
            addNewItem,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}




