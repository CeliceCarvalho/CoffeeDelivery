import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { FormContainer, FormTextField, PaymentOptions, PaymentOptionsButton } from "./styles"
import { Controller } from "react-hook-form"
import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"

export function PersonalForm(){
    const { register, control } = useContext(CartContext)

    return(
        <form>
            <h1>Complete seu pedido</h1>
            <FormContainer>
                <header>
                    <MapPinLine color="#C47F17"/>
                    <div>
                        <h3>Endereço de entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </header>
                    <article>
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
                    </article>
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
                                        <PaymentOptionsButton value="Cartão de Crédito">
                                            <CreditCard size={16}/>
                                            <p>CARTÃO DE CRÉDITO</p>
                                        </PaymentOptionsButton>
                                        <PaymentOptionsButton value="Cartão de Débito">
                                            <Bank size={16}/>
                                            <p>CARTÃO DE DÉBITO</p>
                                        </PaymentOptionsButton>
                                        <PaymentOptionsButton value="Dinheiro">
                                            <Money size={16}/>
                                            <p>DINHEIRO</p>
                                        </PaymentOptionsButton>
                                    </PaymentOptions>
                                )
                            }}
                        />
                    </section>     
                </FormContainer>
        </form>
    )
}