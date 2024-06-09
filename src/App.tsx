import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyleComponent } from './GlobalStyle'

export function App(){
    return(
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router/>
            <GlobalStyleComponent/>
          </BrowserRouter>
      </ThemeProvider>
    )
}