import { ReactNode, createContext } from "react";

const CartContext = createContext({} as CartContextType)

interface Cart{
    id: string,
    quantity: number,
}

interface CartContextType{
    Cart: Cart[],
}

interface CartContextProviderProps{
    children: ReactNode
}

/*export function CartContextProvider({children}: CartContextProviderProps){
    return(
        <CartContext.Provider value={
        }>
            {children}
        </CartContext.Provider>
    )
}*/




