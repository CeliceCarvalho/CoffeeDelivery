import { zodResolver } from "@hookform/resolvers/zod";
import { produce } from "immer";
import { ReactNode, createContext, useReducer, useState } from "react";
import { Control, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import * as zod from 'zod'

export const CartContext = createContext({} as CartContextType)

const deliveryAdressValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o cep'),
    street: zod.string().min(1, 'Informe a street'),
    number: zod.number(),
    comp: zod.string().min(1, 'Informe o complemento'),
    neighborhood: zod.string().min(1, 'Informe o neighborhood'),
    city: zod.string().min(1, 'Informe a city'),
    uf: zod.string().min(1, 'Informe a unidade federativa'),
    paymentType: zod.string()
})

type deliveryAdressData = zod.infer<typeof deliveryAdressValidationSchema>

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
    updateAlreadyAddedItem: (item: Item) => void
    removeItem: (item: Item) => void
    deliveryAdress: deliveryAdressData
    setDeliveryAdress: (data: deliveryAdressData) => void
    register: UseFormRegister<deliveryAdressData>
    handleSubmit: UseFormHandleSubmit<deliveryAdressData>
    control: Control<deliveryAdressData>
}

interface CartContextProviderProps{
    children: ReactNode
}

interface Payload{
    item: Item
}

type Action = 
    | {type: "ADD_NEW_ITEM"; payload: Payload}
    | {type: "UPDATE_ITEM"; payload: Payload}
    | {type: "REMOVE_ITEM"; payload: Payload}


export function CartContextProvider({children}: CartContextProviderProps){

    const [cart, dispach] = useReducer((state: Cart, action: Action) => {
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

    function setDeliveryAdress(data: deliveryAdressData){
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

    const { register, handleSubmit, control } = useForm<deliveryAdressData>({
        resolver: zodResolver(deliveryAdressValidationSchema),
    })

    console.log(deliveryAdress)
    return(
        <CartContext.Provider value={{
            addNewItem,
            updateAlreadyAddedItem,
            cart,
            deliveryAdress,
            setDeliveryAdress,
            removeItem,
            register,
            handleSubmit,
            control,
        }}>
            {children}
        </CartContext.Provider>
    )
}




