import { Card } from "../Card";
import { ListContainer } from "./styles";

export function CoffeeList(){
    return(
        <ListContainer>        
            <h1>Nossos cafés</h1>
            <Card/>
        </ListContainer>
    )
}