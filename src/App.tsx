import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaultTheme'
import { Home } from './Home/index'

export function App(){
    return(
      <ThemeProvider theme={defaultTheme}>
        <Home/>
      </ThemeProvider>
    )
}