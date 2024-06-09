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
    titles:{
        XL: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 800;
            font-size: 2.6rem;
            line-height: 1.3
        `,
        L: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 800;
            font-size: 2rem;
            line-height: 1.3;
        `,
        M: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 800;
            font-size: 1.5rem;
            line-height: 1.3;
        `,
        S: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
            line-height: 1.3;
        `,
        XS: css`
            font-family: "Baloo 2", sans-serif;
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.3;
        `,
    },
    texts:{
        L_regular: css `
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.3;
        `,
        L_bold: css`
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
            line-height: 1.3;
        `,
        M_regular: css`
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.3;
        `,
        M_bold: css`
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.3;
        `,
        S: css`
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.3;
        `,
        XS: css`
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 0.75rem;
            line-height: 1.3;
        `,
        tag: css`
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 0.625rem;
            line-height: 1.3;
        `,
    },
    button:{
        G: css`
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 1.6;
        `,
        M: css`
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 0.625rem;
            line-height: 1.6;
        `
    }
}
