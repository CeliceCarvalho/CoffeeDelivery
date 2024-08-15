import styled from "styled-components";

export const CounterContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;

    max-width: 66px;

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