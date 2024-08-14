import { TextField } from "@mui/material"
import styled from "styled-components"
import * as RadioGroup from '@radix-ui/react-radio-group'

export const FormContainer = styled.div`
    margin-top: 15px;
    padding: 40px;
    background-color: ${props => props.theme.colors.base.card};
    flex: 1;

    border-radius: 6px;

    header{
        display: flex;
        gap: 0.5rem;
        
        h3{
            ${props => props.theme.texts.M_regular};
            color: ${props => props.theme.colors.base.subtitle};
        }
        p{
            ${props => props.theme.texts.S_regular};
            color: ${props => props.theme.colors.base.text};
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 16px;

        margin-top: 32px;

        div{
            display: flex;
            gap: 12px;
        }
    }

    section{
        margin-top: 32px;
    }

`

export const FormTextField = styled(TextField)`
    .MuiInputBase-root{
        height: 42px;
        background-color: ${props => props.theme.colors.base.input};
        color: ${props => props.theme.colors.base.label};
        & fieldset{
            border-color: #E6E5E5;
        }
        &.Mui-focused fieldset {
            border-color: ${props => props.theme.colors.brand.purple};
        }
    }
    ::placeholder{
        ${props => props.theme.texts.S_regular}
    }
    :focus{
        box-shadow: none;
    }
    
    height: 42px;
`
export const PaymentOptions = styled(RadioGroup.Root)`
    display: flex;
    gap: 12px;
`

export const PaymentOptionsButton = styled(RadioGroup.Item)`
    width: 180px;
    height: 51px;

    border: 0;
    border-radius: 6px;

    svg{
        color: ${props => props.theme.colors.brand.purple};
    }

    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;

    color: ${props => props.theme.colors.base.text};
    background-color: ${props => props.theme.colors.base.button};

    p{
        ${props => props.theme.button.M}
    }
    cursor: pointer;

    &[data-state="unchecked"]:hover{
        background-color: ${props => props.theme.colors.base.hover};
        transition: 0.2s;
    }

    &[data-state="checked"]{
        background-color: ${props => props.theme.colors.brand.purple_light};
        border: 1px solid ${props => props.theme.colors.brand.purple};
    }
`