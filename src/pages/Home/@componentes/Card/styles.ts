import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 54px;

    width: 256px;
    height: 310px;
    border-radius: 6px 36px;

    padding: 0 24px 24px 24px;

    background-color: ${props => props.theme.colors.base.card};

    img{
        margin-top: -20px;
    }

    h2{
        margin-top: 16px;
        ${props => props.theme.titles.S}
    }

    p{
        margin-top: 8px;
        ${props => props.theme.texts.S_regular}
        color: ${props => props.theme.colors.base.label};
        text-align: center;
    }

`

export const Tag = styled.div`
    margin-top: 12px;

    width: fit-content;
    height: fit-content;

    padding: 4px 8px;
    border-radius: 100px;

    background-color: ${props => props.theme.colors.brand.yellow_light};

    span{
        ${props => props.theme.texts.tag}
    }
`

export const BuyContainer = styled.div `
    display: flex;
    align-items: center;

    div span{
        ${props => props.theme.texts.S_regular}
    }
    
    div h3{
        ${props => props.theme.titles.M_bold}
    }

`
export const Counter = styled.div`
`

export const CartButton = styled.div`
`