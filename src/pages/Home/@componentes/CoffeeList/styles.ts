import styled from "styled-components";

export const ListContainer = styled.div`
    margin-top: 140px;

    h1{
        ${props => props.theme.titles.L}
    }

`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 32px;
`