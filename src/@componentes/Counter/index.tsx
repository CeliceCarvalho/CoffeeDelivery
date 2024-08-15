import { Minus, Plus } from "@phosphor-icons/react"
import { CounterContainer } from "./styles"
import { useState } from "react"

export function Counter(){
    const [ Quantity, setQuantity ] = useState<number>(0)

    function handleAddQuantity(){
        setQuantity(Quantity + 1)
    }

    function handleRemoveQuantity(){
        setQuantity(Quantity - 1)
    }

    return(
        <CounterContainer>
            <div>
                <Minus onClick={handleRemoveQuantity}/>
            </div>
            <p>{Quantity}</p>
            <div>
                <Plus onClick={handleAddQuantity}/>
            </div>
        </CounterContainer>
    )
}