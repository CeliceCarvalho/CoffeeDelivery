import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Counter } from "../Home/@componentes/Card/styles"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import imgExpresso from '../../assets/Type_Expresso.svg'
import { CheckoutContainer, FormContainer, TextFieldStyled, PaymentOptions } from "./styles"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"


const deliveryAdressValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o cep'),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.number(),
    comp: zod.string().min(1, 'Informe o complemento'),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe a unidade federativa')
})

type deliveryAdressData = zod.infer<typeof deliveryAdressValidationSchema>

export function Checkout(){
    const { setDeliveryAdress } = useContext(CartContext)
    const { register, handleSubmit, watch } = useForm<deliveryAdressData>({
        resolver: zodResolver(deliveryAdressValidationSchema),
    })

    function setAdress(data: deliveryAdressData){
        setDeliveryAdress(data)
    }

    function Mostrar(data: deliveryAdressData){
        console.log(data)
    }


    return(
        <CheckoutContainer>
            <section>
                <h1>Complete seu pedido</h1>
                <FormContainer>
                    <header>
                        <MapPinLine/>
                        <div>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </header>
                    <form onSubmit={handleSubmit(setAdress)}>
                        <TextFieldStyled 
                            style={{width: "28%"}}
                            type="text" 
                            placeholder="CEP"
                            id="cep"
                            {...register('cep')}
                        />
                        <TextFieldStyled
                            style={{flex: 1}}
                            type="text"
                            placeholder="Rua" 
                            id="rua"
                            {...register('rua')}
                        />
                        <div>
                            <TextFieldStyled 
                                style={{width: "28%"}}
                                type="number" 
                                placeholder="Número"
                                id="numero"
                                {...register('numero', {valueAsNumber: true})}
                            />
                            <TextFieldStyled 
                                style={{flex: 1}}
                                type="text" 
                                placeholder="Complemento"
                                id="comp"
                                {...register('comp')}     
                            />
                        </div>
                        <div>
                            <TextFieldStyled
                                style={{width: "28%"}} 
                                type="text" 
                                placeholder="Bairro"
                                id="bairro"
                                {...register('bairro')}
                            />
                            <TextFieldStyled 
                                style={{flex: 1}}
                                type="text" 
                                placeholder="Cidade" 
                                id="cidade"
                                {...register('cidade')}
                            />
                            <TextFieldStyled 
                                style={{width: 60}} 
                                type="text" 
                                placeholder="UF"
                                id="uf"
                                {...register('uf')}    
                            />
                        </div>
                        <NavLink to="/confirmedOrder">
                            <button>
                                Ir
                            </button>
                        </NavLink>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </FormContainer>
                <FormContainer>
                    <header>
                        <CurrencyDollar/>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>
                    <PaymentOptions>
                        <FormControlLabel label='' value="credit" control={
                            <button>
                                <CreditCard size={16}/>
                                 <p>CARTÃO DE CRÉDITO</p>
                            </button>
                        }/>
                        <FormControlLabel label='' value="debit" control={
                            <button>
                                <Bank size={16}/>
                                <p>CARTÃO DE DÉBITO</p>
                            </button>
                        }/>
                        <FormControlLabel label='' value="cash" control={
                            <button>
                                <Money size={16}/>
                                <p>DINHEIRO</p>
                            </button>
                        }/>
                    </PaymentOptions>
                </FormContainer>
            </section>
            <div>
                <h1>Cafés selecionados</h1>
                <div>
                    <section>
                        <img src={imgExpresso} alt="" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <div>
                                <Counter>
                                    <Minus/>
                                    <p>1</p>
                                    <Plus/>
                                </Counter>
                                <button>
                                    <Trash size={8}/>
                                    Remover
                                </button>
                            </div>
                        </div>
                        <span>R$ 9,90</span>
                    </section>
                    <section>
                        <span>Total de itens</span>
                        <p>R$ 29,70</p>
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
                </div>
            </div>
        </CheckoutContainer>
        
    )
}