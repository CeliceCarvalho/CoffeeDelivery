import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 32px 0;
    max-height: 104px;

    width: 100%;
`
export const LocationTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    padding: 8px;
    border-radius: 6px;
    svg{
        color: ${props => props.theme.colors.brand.purple};
    }

    p{
        ${props => props.theme.texts.S_regular}
        color: ${props => props.theme.colors.brand.purple_dark};
    }

    background-color: ${props => props.theme.colors.brand.purple_light};
`

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

export const CartContainer = styled.div`
    padding: 8px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        color: ${props => props.theme.colors.brand.yellow}
    }

    background-color: ${props => props.theme.colors.brand.yellow_light};
`

export const ItemsQuantity = styled.div`
    position: absolute;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.brand.yellow_dark};
    color: ${props => props.theme.colors.base.white};
    ${props => props.theme.texts.S_bold}

    transform: translate(90%, -90%);
`