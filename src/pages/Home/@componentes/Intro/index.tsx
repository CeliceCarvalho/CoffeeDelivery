import { IconContainer, IntroContainer, Items, ItemsContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import introImage from "/src/assets/introImage.svg"
import { useTheme } from "styled-components";

export function Intro(){
    const { colors } = useTheme()
        return(
            <IntroContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <ItemsContainer>
                        <Items>
                            <IconContainer>
                                <ShoppingCart
                                    size={32} 
                                    weight="fill"
                                    style={{
                                        backgroundColor: colors.brand.yellow_dark, 
                                        borderRadius: "32px", 
                                        padding: "8px", 
                                        color: "#FFF"
                                    }}
                                />
                            </IconContainer>
                            <p>Compra simples e segura</p>
                        </Items>
                        <Items>
                            <IconContainer>
                                <Package 
                                    size={32} 
                                    weight="fill"
                                    style={{
                                        backgroundColor: colors.base.text, 
                                        borderRadius: "32px", 
                                        padding: "8px", 
                                        color: "#FFF"
                                    }}
                                />
                            </IconContainer>
                            <p>Embalagem mantém o café intacto</p>
                        </Items>
                        <Items>
                            <IconContainer>
                                <Timer 
                                    size={32} 
                                    weight="fill"
                                    style={{
                                        backgroundColor: colors.brand.yellow, 
                                        borderRadius: "32px", 
                                        padding: "8px", 
                                        color: "#FFF"
                                    }}
                                />
                            </IconContainer>
                            <p>Entrega rápida e rastreada</p>
                        </Items>
                        <Items>
                            <IconContainer>
                                <Coffee 
                                    size={32} 
                                    weight="fill" 
                                    style={{
                                        backgroundColor: colors.brand.purple, 
                                        borderRadius: "32px", 
                                        padding: "8px", 
                                        color: "#FFF"
                                    }}
                                />
                            </IconContainer>
                            <p>O café chega fresquinho até você</p>
                        </Items>
                    </ItemsContainer>
                </div>
                <img src={introImage}/>
            </IntroContainer>
    )
}