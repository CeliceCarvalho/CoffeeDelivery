import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { Counter } from "../Home/@componentes/Card/styles";
import { CheckoutContainer, ChosenCoffee, ChosenCoffees, ChosenCoffeesCard, ConfirmerButton, Container, DeleteButton, XContainer } from "./styles";
import { PersonalForm } from "./@components/PersonalForm";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { coffees } from "../../data.json";

export function Checkout() {
  const { cart, updateAlreadyAddedItem, removeItem } = useContext(CartContext);

  const subTotal = cart.items.reduce((acc, item) => {
    const CoffeeInCart = coffees.find((coffee) => coffee.id === item.id);
    if (CoffeeInCart) {
      return (
        acc + item.quantity * parseFloat(CoffeeInCart.price.replace(",", "."))
      );
    } else {
      return 0;
    }
  }, 0);

  const total = subTotal + 3.5;

  function handleUpdateQuantity(id: string, operator: 1 | -1) {
    const ItemInCart = cart.items.find((item) => item.id === id);

    if (ItemInCart) {
      const updatedItem = {
        ...ItemInCart,
        quantity: ItemInCart.quantity + operator,
      };
      updateAlreadyAddedItem(updatedItem);
    }
  }

  function handleRemoveItem(id: string) {
    const ItemInCart = cart.items.find((item) => item.id === id);
    {
      ItemInCart ? removeItem(ItemInCart) : 0;
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
              const itemInCart = cart.items.find(
                (item) => item.id === coffee.id
              );
              const quantity = itemInCart ? itemInCart.quantity : 0;
              if (itemInCart) {
                return (
                  <ChosenCoffee>
                    <img src={coffee.imgSrc}/>
                    <article>
                        <p>{coffee.name}</p>
                        <section>
                            <Counter>
                                <Minus
                                    onClick={() => handleUpdateQuantity(coffee.id, -1)}
                                />
                                <p>{quantity}</p>
                                <Plus
                                    onClick={() => handleUpdateQuantity(coffee.id, 1)}
                                />
                            </Counter>
                            <DeleteButton onClick={() => handleRemoveItem(coffee.id)}>
                                <Trash size={16} />
                                <h6>REMOVER</h6>
                            </DeleteButton>
                        </section>
                    </article>
                    
                    <span>R$ {coffee.price}</span>
                  </ChosenCoffee>
                );
              }
            })}
          </section>
            <article>
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
            </article>
          <ConfirmerButton><p>CONFIRMAR PEDIDO</p></ConfirmerButton>
        </ChosenCoffeesCard>
      </ChosenCoffees>
    </CheckoutContainer>
  );
}
