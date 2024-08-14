import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { FormContainer, FormTextField, PaymentOptions, PaymentOptionsButton } from "./styles"
import { NavLink } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'

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

export function PersonalForm(){
    const { setDeliveryAdress } = useContext(CartContext)
    const { register, handleSubmit, watch, control } = useForm<deliveryAdressData>({
        resolver: zodResolver(deliveryAdressValidationSchema),
    })

    function setAdress(data: deliveryAdressData){
        setDeliveryAdress(data)
    }
    return(
        <section style={{width: "60%"}}>
            <h1>Complete seu pedido</h1>
            <FormContainer>
                <header>
                    <MapPinLine color="#C47F17"/>
                    <div>
                        <h3>Endereço de entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </header>
                    <form onSubmit={handleSubmit(setAdress)}>
                        <FormTextField 
                            style={{width: "28%"}}
                            type="text" 
                            placeholder="CEP"
                            id="cep"
                            {...register('cep')}
                        />
                        <FormTextField
                            style={{flex: 1}}
                            type="text"
                            placeholder="Rua" 
                            id="street"
                            {...register('street')}
                        />
                        <div>
                            <FormTextField 
                                style={{width: "28%"}}
                                type="number" 
                                placeholder="Número"
                                id="number"
                                {...register('number', {valueAsNumber: true})}
                            />
                            <FormTextField 
                                style={{flex: 1}}
                                type="text" 
                                placeholder="Complemento"
                                id="comp"
                                {...register('comp')}     
                            />
                        </div>
                        <div>
                            <FormTextField
                                style={{width: "28%"}} 
                                type="text" 
                                placeholder="Bairro"
                                id="neighborhood"
                                {...register('neighborhood')}
                            />
                            <FormTextField 
                                style={{flex: 1}}
                                type="text" 
                                placeholder="Cidade" 
                                id="city"
                                {...register('city')}
                            />
                            <FormTextField 
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
                        <CurrencyDollar color="#8047F8"/>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>
                    <section>
                        <Controller
                            name="paymentType"
                            control={control}
                            render={({field}) => {
                                return (
                                    <PaymentOptions onValueChange={field.onChange} value={field.value}>
                                        <PaymentOptionsButton value="credit">
                                            <CreditCard size={16}/>
                                            <p>CARTÃO DE CRÉDITO</p>
                                        </PaymentOptionsButton>
                                        <PaymentOptionsButton value="debit">
                                            <Bank size={16}/>
                                            <p>CARTÃO DE DÉBITO</p>
                                        </PaymentOptionsButton>
                                        <PaymentOptionsButton value="cash">
                                            <Money size={16}/>
                                            <p>DINHEIRO</p>
                                        </PaymentOptionsButton>
                                    </PaymentOptions>
                                )
                            }}
                        />
                    </section>     
                </FormContainer>
        </section>
    )
}