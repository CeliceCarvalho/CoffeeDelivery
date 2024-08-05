import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function ConfirmedOrder(){
    const { deliveryAdress } = useContext(CartContext);
    console.log(deliveryAdress)

    return(
        <div>
            <h1>{deliveryAdress.bairro}</h1>
            <h1>{deliveryAdress.cep}</h1>
            <h1>{deliveryAdress.cidade}</h1>
            <h1>{deliveryAdress.comp}</h1>
            <h1>{deliveryAdress.numero}</h1>
            <h1>{deliveryAdress.rua}</h1>
            <h1>{deliveryAdress.uf}</h1>
        </div>
    )
}