import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 32px;

    h1{
        ${props => props.theme.titles.XS}
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
    padding: 40px;
    background-color: ${props => props.theme.colors.base.card};
    flex: 1;

    border-radius: 6px 32px 6px 32px;

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
    }

    article{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`

export const ChosenCoffee = styled.div`
    display: flex;
    gap: 20px;
    padding-bottom: 32px;

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
`

export const ConfirmerButton = styled.button`
    background-color: ${props => props.theme.colors.brand.yellow};
    border: none;
    border-radius: 6px;

    color: ${props => props.theme.colors.base.white};

    padding: 12px 8px;

    p{
        ${props => props.theme.button.G}
    }

`



