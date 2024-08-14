import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function ConfirmedOrder(){
    const { deliveryAdress } = useContext(CartContext);
    console.log(deliveryAdress)

    return(
        <div>
            <h1>{deliveryAdress.neighborhood}</h1>
            <h1>{deliveryAdress.cep}</h1>
            <h1>{deliveryAdress.city}</h1>
            <h1>{deliveryAdress.comp}</h1>
            <h1>{deliveryAdress.number}</h1>
            <h1>{deliveryAdress.street}</h1>
            <h1>{deliveryAdress.uf}</h1>
            <h1>{deliveryAdress.paymentType}</h1>
        </div>
    )
}