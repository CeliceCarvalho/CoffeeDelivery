import styled, { css } from "styled-components";

export const ConfirmedOrderContainer = styled.main`
    margin-top: 80px;

    h1{
        ${props => props.theme.titles.L}
        color: ${props => props.theme.colors.brand.yellow_dark};
    }

    h3{
        ${props => props.theme.texts.L_regular}
        color: ${props => props.theme.colors.base.subtitle};
    }

    p{
        ${props => props.theme.texts.M_regular}
        color: ${props => props.theme.colors.base.text};
    }

    strong{
        ${props => props.theme.texts.M_bold}
        color: ${props => props.theme.colors.base.text};
    }
`

interface IconContainerVariant {
    variant: 'purple'| 'yellow'| 'yellow-dark'
}

export const IconContainer = styled.div<IconContainerVariant>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    width: 32px;
    border-radius: 64px;

    color: ${props => props.theme.colors.base.white};

    ${props => props.variant === 'purple' && css`
        background-color: ${props.theme.colors.brand.purple}
    `}
    ${props => props.variant === 'yellow' && css`
        background-color: ${props.theme.colors.brand.yellow}
    `}
    ${props => props.variant === 'yellow-dark' && css`
        background-color: ${props.theme.colors.brand.yellow_dark}
    `}
`