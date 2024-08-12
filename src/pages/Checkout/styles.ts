import { TextField, FormControlLabel, RadioGroup } from "@mui/material";
import styled from "styled-components";


export const CheckoutContainer = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 32px;

    h1{
        ${props => props.theme.titles.XS}
    }

    section{
        flex: 1;
    }

`

export const FormContainer = styled.div`
    margin-top: 15px;
    padding: 40px;
    background-color: ${props => props.theme.colors.base.card};
    flex: 1;

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

    button{
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
        justify-content: center;

        color: ${props => props.theme.colors.base.text};
        background-color: ${props => props.theme.colors.base.button};

        p{
            ${props => props.theme.button.M}
        }

        :checked{
            
        }
    }
`

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root{
        height: 42px;
        background-color: ${props => props.theme.colors.base.input};
        color: ${props => props.theme.colors.base.label};
        fieldset{
            border-color: #E6E5E5;
        }
        
    }
    
    ::placeholder{
        ${props => props.theme.texts.S_regular}
    }
`
export const PaymentOptions = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
    gap: 12px; 
    
`
