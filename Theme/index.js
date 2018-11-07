import React from 'react'

const DEFAULT_THEME = {
  palette: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastTextDark: '#fff',
      contrastTextLight: '#444',
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastTextDark: '#fff',
      contrastTextLight: '#444',
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastTextDark: '#fff',
      contrastTextLight: '#444',
    },
    grey: {
      '50': "#fafafa",
      '100': "#f5f5f5",
      '200': "#eeeeee",
      '300': "#e0e0e0",
      '400': "#bdbdbd",
      '500': "#9e9e9e",
      '600': "#757575",
      '700': "#616161",
      '800': "#424242",
      '900': "#212121",
      'A100': "#d5d5d5",
      'A200': "#aaaaaa",
      'A400': "#303030",
      'A700': "#616161",
    }
  }
}

const createTheme = custom => {
  return {
    ...DEFAULT_THEME
  }
}

const mainTheme = createTheme()

const ThemeContext = React.createContext(mainTheme)

const withTheme = () => (Component) => (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  )
}

class Provider extends React.Component {
  render() {
    return (
      <ThemeContext.Provider>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default {
  createTheme,
  withTheme,
  Provider,
}

