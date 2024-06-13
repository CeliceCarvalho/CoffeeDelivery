import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyleComponent } from './GlobalStyle'
import { CartContextProvider } from './contexts/CartContext'

export function App(){
    return(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <CartContextProvider>
                <Router/>
                <GlobalStyleComponent/>
            </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    )
}