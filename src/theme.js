import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: 'rgb(245, 245, 245)',
      white: '#ffffff',
    },
  },
})

export default theme