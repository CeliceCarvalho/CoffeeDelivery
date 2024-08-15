import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { Counter } from "../Home/@componentes/Card/styles"
import { CheckoutContainer, ChosenCoffees, ChosenCoffeesCard } from "./styles"
import { PersonalForm } from "./@components/PersonalForm"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { coffees } from "../../data.json"

export function Checkout(){
    const {cart} = useContext(CartContext)

    const total = cart.items.reduce((acc, item) => {
        const CoffeeInCart = coffees.find(coffee => coffee.id === item.id)
        if(CoffeeInCart){
            return acc + item.quantity * parseFloat(CoffeeInCart.price.replace(',', '.'))
        }else{
            return 0
        }
    }, 0)

    return(
        <CheckoutContainer>
            <PersonalForm/>
            <ChosenCoffees>
                <h1>Cafés selecionados</h1>
                <ChosenCoffeesCard>
                    <section>
                        {coffees.map(coffee => {
                            const itemInCart = cart.items.find(item => item.id === coffee.id)
                            const quantity = itemInCart ? itemInCart.quantity : 0

                            if(itemInCart){
                                return(
                                    <div>
                                        <img src={coffee.imgSrc} />
                                        <p>{coffee.name}</p>
                                        <Counter>
                                            <Minus/>
                                            <p>{quantity}</p>
                                            <Plus/>
                                        </Counter>
                                        <button>
                                            <Trash size={8}/>
                                            Remover
                                        </button>
                                        <span>R$ {coffee.price}</span>
                                    </div>
                                )
                            }
                        })
                        }
                        
                    </section>
                    <section>
                        <span>Total de itens</span>
                        <p>R$ {total.toFixed(2).replace('.',',')}</p>
                    </section>
                    <section>
                        <span>Entrega</span>
                        <p>R$ 3,50</p>
                    </section>
                    <section>
                        <strong>Total</strong>
                        <strong>R$ 3,50</strong>
                    </section>
                    <button>
                        CONFIRMAR PEDIDO
                    </button>
                </ChosenCoffeesCard>
            </ChosenCoffees>
        </CheckoutContainer>
    )
}