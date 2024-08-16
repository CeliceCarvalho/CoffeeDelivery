import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { MapPin } from "@phosphor-icons/react";
import { IconContainer, ConfirmedOrderContainer } from "./styles";

export function ConfirmedOrder() {
  const { deliveryAdress } = useContext(CartContext);
  console.log(deliveryAdress);

  return (
    <ConfirmedOrderContainer>
      <header>
        <h1>Uhu! Pedido onfirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </header>
      <article>
        <section>
          <div>
            <IconContainer variant="purple">
              <MapPin weight="fill" />
            </IconContainer>
           <div>
            <div>
                <p>
                    Entrega em{" "}
                    <strong>
                        {deliveryAdress.street}, {deliveryAdress.number}
                    </strong>
                </p>
                <p>
                    {deliveryAdress.neighborhood} - {deliveryAdress.city},{" "}
                    {deliveryAdress.uf}
                </p>
            </div>
                
           </div>
          </div>
          <div>
            <IconContainer variant="yellow">
              <MapPin weight="fill" />
            </IconContainer>
            <div>
                <p>
                    Previsão de entrega 
                </p>
                <strong>
                    20 min - 30 min
                </strong>
            </div>
          </div>
          <div>
            <IconContainer variant="yellow-dark">
              <MapPin weight="fill" />
            </IconContainer>
            <div>
                <p>
                    Pagamento na entrega
                </p>
                <strong> 
                    {deliveryAdress.paymentType}
                </strong>
            </div>
          </div>
        </section>
      </article>
    </ConfirmedOrderContainer>
  );
}
