import { css } from "styled-components"

export const defaultTheme = {
    colors:{
        base:{
            white:'#FFFFFF',
            background: '#FAFAFA',
            card: '#F3F2F2',
            input: '#EDEDED',
            button: '#E6E5E5',
            hover: '#D7D5D5',
            label: '#8D8686',
            text: '#574F4D',
            subtitle: '#403937',
            title: '#272221',
        },
    brand:{
            purple_dark: '#4B2995',
            purple: '#8047F8',
            purple_light: '#EBE5F9',
            yellow_dark: '#C47F17',
            yellow: '#DBAC2C',
            yellow_light: '#F1E9C9',
        }
    },
    texts:{
        title_XL: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 800;
            font-size: 48;
            line-height: 1.3
        `
    }
}
