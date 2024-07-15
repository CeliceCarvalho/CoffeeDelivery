import { CurrencyDollar, MapPinLine, Minus, Plus } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { coffees } from "../../data.json"
import { Counter } from "../Home/@componentes/Card/styles"
import { useForm } from "react-hook-form"

export function Checkout(){
    const { cart }   = useContext(CartContext)
    const { register, handleSubmit, watch } = useForm()

    return(
        <div>
            <div>
                <h1>Complete seu pedido</h1>
                <div>
                    <header>
                        <MapPinLine/>
                        <div>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </header>
                    <form>
                        <input 
                            type="text" 
                            placeholder="CEP"
                            id="cep"
                            {...register('cep')}
                        />
                        <input
                            type="text"
                            placeholder="Rua" 
                            id="rua"
                            {...register('rua')}
                        />
                        <div>
                            <input 
                                type="number" 
                                placeholder="Número"
                                id="numero"
                                {...register('numero´gbbn')}
                            />
                            <input type="text" placeholder="Complemento" />
                        </div>
                        <div>
                            <input type="text" placeholder="Bairro" />
                            <input type="text" placeholder="Cidade" />
                            <input type="text" placeholder="UF" />
                        </div>
                        
                    </form>
                </div>
                <div>
                    <header>
                        <CurrencyDollar/>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                    </header>
                </div>
            </div>
            <div>
                <h1>Cafés selecionados</h1>
                <div>
                    <img src={coffees[1].imgSrc}/>
                    <div>
                        <p>{coffees[1].name}</p>
                        <div>
                            <Counter>
                                <Minus/>
                                <p>1</p>
                                <Plus/>
                            </Counter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}