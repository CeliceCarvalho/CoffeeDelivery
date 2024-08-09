import { Card } from "./@componentes/Card"
import { Intro } from "./@componentes/Intro"
import { Cards, HomeContainer, ListContainer } from "./styles"
import { coffees } from "../../data.json"


export function Home(){
    return (
        <HomeContainer>
            <Intro/>
            <ListContainer>        
                <h1>Nossos cafés</h1>
                <Cards>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee}/>
                    ))}
                </Cards>
            </ListContainer>
        </HomeContainer>
    )
}