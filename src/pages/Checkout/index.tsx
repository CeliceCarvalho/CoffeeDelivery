import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { Counter } from "../Home/@componentes/Card/styles";
import {
  CheckoutContainer,
  ChosenCoffees,
  ChosenCoffeesCard,
  ConfirmerButton,
  DeleteButton,
  CoffeeInCart,
  CoffeePrice,
  Prices,
} from "./styles";
import { PersonalForm } from "./@components/PersonalForm";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { coffees } from "../../data.json";
import { useNavigate } from "react-router-dom";

interface DeliveryAdress {
  cep: string;
  street: string;
  number: number;
  comp: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentType: string;
}

export function Checkout() {
  const { cart, updateAlreadyAddedItem, removeItem, handleSubmit, setDeliveryAdress } = useContext(CartContext);
  const navigate = useNavigate();

  function setAdress(data: DeliveryAdress) {
    setDeliveryAdress(data);
    navigate('/ConfirmedOrder');
  }

  const subTotal = cart.items.reduce((acc, item) => {
    const coffeeInCart = coffees.find((coffee) => coffee.id === item.id);
    if (coffeeInCart) {
      return acc + item.quantity * coffeeInCart.price; // Agora `price` é um number
    } else {
      return acc;
    }
  }, 0);

  const total = subTotal + 3.5;

  function handleUpdateQuantity(id: string, operator: 1 | -1) {
    const itemInCart = cart.items.find((item) => item.id === id);

    if (itemInCart) {
      const updatedItem = {
        ...itemInCart,
        quantity: itemInCart.quantity + operator,
      };
      updateAlreadyAddedItem(updatedItem);
    }
  }

  function handleRemoveItem(id: string) {
    const itemInCart = cart.items.find((item) => item.id === id);
    if (itemInCart) {
      removeItem(itemInCart);
    }
  }

  return (
    <CheckoutContainer>
      <PersonalForm />
      <ChosenCoffees>
        <h1>Cafés selecionados</h1>
        <ChosenCoffeesCard>
          <section>
            {coffees.map((coffee) => {
              const itemInCart = cart.items.find((item) => item.id === coffee.id);
              const quantity = itemInCart ? itemInCart.quantity : 0;
              if (itemInCart) {
                return (
                  <CoffeeInCart key={coffee.id}>
                    <img src={coffee.imgSrc} alt={coffee.name} />
                    <article>
                      <p>{coffee.name}</p>
                      <section>
                        <Counter>
                          <Minus onClick={() => handleUpdateQuantity(coffee.id, -1)} />
                          <p>{quantity}</p>
                          <Plus onClick={() => handleUpdateQuantity(coffee.id, 1)} />
                        </Counter>
                        <DeleteButton onClick={() => handleRemoveItem(coffee.id)}>
                          <Trash size={16} />
                          <h6>REMOVER</h6>
                        </DeleteButton>
                      </section>
                    </article>
                    <CoffeePrice>R$ {coffee.price.toFixed(2).replace(".", ",")}</CoffeePrice>
                  </CoffeeInCart>
                );
              }
              return null; // Retorna `null` se o item não estiver no carrinho
            })}
          </section>
          <Prices>
            <section>
              <span>Total de itens</span>
              <p>R$ {subTotal.toFixed(2).replace(".", ",")}</p>
            </section>
            <section>
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </section>
            <section>
              <strong>Total</strong>
              <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
            </section>
          </Prices>
          <ConfirmerButton onClick={handleSubmit(setAdress)}>
            <p>CONFIRMAR PEDIDO</p>
          </ConfirmerButton>
        </ChosenCoffeesCard>
      </ChosenCoffees>
    </CheckoutContainer>
  );
}
