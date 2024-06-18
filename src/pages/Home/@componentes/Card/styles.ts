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

    h6{
        margin-top: 8px;
        ${props => props.theme.texts.S_regular}
        color: ${props => props.theme.colors.base.label};
        text-align: center;
    }

`

export const Tags = styled.div `
    display: flex;
    gap: 4px;
`

export const Tag = styled.div`
    display: flex;
    align-items: center;

    margin-top: 12px;

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

    width: 100%;
    margin-top: 32px;

    div span{
        ${props => props.theme.texts.S_regular}
        color: ${props => props.theme.colors.base.text};
    }
    
    div h3{
        ${props => props.theme.titles.M}
        color: ${props => props.theme.colors.base.text};
    }

`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;
    flex: 1;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
`

export const Counter = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;

    padding: 8px;
    border-radius: 6px;

    background-color: ${props => props.theme.colors.base.button};

    p{
        ${props => props.theme.texts.M_regular}
        color: ${props => props.theme.colors.base.title};
    }

    div{
        padding: 2px;
        cursor: pointer;
    }

    svg{
        color: ${props => props.theme.colors.brand.purple};
        &:hover{
            color: ${props => props.theme.colors.brand.purple_dark};
            transition: 0.3s;
        }
    }
`

export const CartButton = styled.div`
    display: flex;
    justify-content: center;

    padding: 8px;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.brand.purple};
    color: ${props => props.theme.colors.base.white};

    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.brand.purple_dark};
        transition: 0.3s;
    }
`

