import { Card } from "../Card";
import { ListContainer, Cards } from "./styles";
import { coffees } from "../../../../data.json"

export function CoffeeList(){
    return(
        <ListContainer>        
            <h1>Nossos cafés</h1>
            <Cards>
                {coffees.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee}/>
                ))}
            </Cards>
        </ListContainer>
    )
}