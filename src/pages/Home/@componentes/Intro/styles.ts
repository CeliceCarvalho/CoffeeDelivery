import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;

    margin-top: 94px;

    h1{
        ${props => props.theme.titles.XL}
    }

    h2{
        ${props => props.theme.texts.L_regular}
        margin-top: 1rem;
    }

    p{
        ${props => props.theme.texts.M_regular}
    }

    img{
        width: 30vw;
        max-height: 544px;
        
    }
`
export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;

    margin-top: 4.125rem;
`

export const Items = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`