import { CoffeeList } from "./@componentes/CoffeeList"
import { Intro } from "./@componentes/Intro"
import { HomeContainer } from "./styles"

export function Home(){
    return (
        <HomeContainer>
            <Intro/>
            <CoffeeList/>
        </HomeContainer>
    )
}