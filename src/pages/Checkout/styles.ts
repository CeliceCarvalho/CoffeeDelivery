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
    margin-top: 15px;
    padding: 40px;
    background-color: ${props => props.theme.colors.base.card};
    flex: 1;

    border-radius: 6px;
`


