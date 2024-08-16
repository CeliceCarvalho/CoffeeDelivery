import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-top: 40px ;

    h1{
        ${props => props.theme.titles.XS}
    }

    form{
        width: 60%;
    }
`

export const ChosenCoffees = styled.div`
    width: 40%;
`
export const ChosenCoffeesCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 15px;
    padding: 4px 40px 40px 40px;
    background-color: ${props => props.theme.colors.base.card};
    flex: 1;

    border-radius: 6px 32px 6px 32px;


`

export const Prices = styled.article`
    display: flex;
    flex-direction: column;
    gap: 12px;

    section{
        display: flex;
        justify-content: space-between;

        span{
            ${props => props.theme.texts.S_regular}
            color: ${props => props.theme.colors.base.text};
        }
        p{
            ${props => props.theme.texts.M_regular}
            color: ${props => props.theme.colors.base.text};
        }
        strong{
            ${props => props.theme.texts.L_bold}
            color: ${props => props.theme.colors.base.text};
        }
    }
`

export const CoffeeInCart = styled.div`
    display: flex;
    gap: 8px;
    padding: 32px 0px;

    border-bottom: 1px solid ${props => props.theme.colors.base.button} ;

    img{
        width: 64px;
    }
    
    p{
        ${props => props.theme.texts.M_regular}
        color: ${props => props.theme.colors.base.subtitle};
    }

    article{
        display: flex;
        flex-direction: column;
        gap: 8px;

        section{
            display: flex;
            flex-direction: row;
            gap: 8px;
        }
    }

    span{
        ${props => props.theme.texts.M_bold}
        color: ${props => props.theme.colors.base.text};
    }

    
`

export const DeleteButton = styled.div`
    background-color: ${props => props.theme.colors.base.button};
    color: ${props => props.theme.colors.base.text};
    
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
    padding: 8px;

    border-radius: 6px;

    h6{
        ${props => props.theme.button.M}
    }

    svg{
        color: ${props => props.theme.colors.brand.purple};
    }

    cursor: pointer;

    &:hover{
        transition: 0.2s;
        background-color: ${props => props.theme.colors.base.hover};
    }
`

export const CoffeePrice = styled.strong`
    ${props => props.theme.texts.M_bold}
    color: ${props => props.theme.colors.base.text};
`

export const ConfirmerButton = styled.button`
    border: none;
    border-radius: 6px;
    padding: 12px 8px;
    width: 100%;

    color: ${props => props.theme.colors.base.white};
    background-color: ${props => props.theme.colors.brand.yellow};

    p{
        ${props => props.theme.button.G}
    }
    cursor: pointer;

    &:hover{
        transition: 0.2s;
        background-color: ${props => props.theme.colors.brand.yellow_dark};
    }

`



