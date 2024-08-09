import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;

    h1{
        ${props => props.theme.titles.XS}
    }

`

export const AdressFormContainer = styled.div`
    padding: 40px;
    background-color: ${props => props.theme.colors.base.card};

    border-radius: 6px;

    header{
        display: flex;
        gap: 0.5rem;
        
        svg{
            margin-top: 2px;
            color: ${props => props.theme.colors.brand.yellow_dark};
        }
        h3{
            ${props => props.theme.texts.M_regular};
            color: ${props => props.theme.colors.base.subtitle};
        }
        p{
            ${props => props.theme.texts.S_regular};
            color: ${props => props.theme.colors.base.text};
        }
    }
`

