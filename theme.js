import { createMuiTheme } from '@material-ui/core/styles'
import { lime, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#afd683',
      main: '#9ccc65',
      dark: '#6d8e46',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a8aa88',
      main: '#f0f4c3',
      dark: '#f3f6cf',
      contrastText: '#000',
    },
      openTitle: lightGreen['400'],
      protectedTitle: lime['400'],
      type: 'light'
    }
  })

  export default theme