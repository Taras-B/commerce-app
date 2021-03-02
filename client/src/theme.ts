import { createMuiTheme } from '@material-ui/core/styles'
import { orange, teal } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string
    }
  }

  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: { main: teal[500] },
  },
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        fontWeight: 600,
        letterSpacing: 3,
      },
    },
  },
})
