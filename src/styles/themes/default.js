const defaultTheme = {
  fonts: {
    main: 'Libre Franklin, sans-serif'
  },
  colors: {
    primary: {
      light: '#EDEDED',
      main: '#8CBD9E',
      dark: '#455D58'
    },
    background: {
      lighter: '#FFF',
      light: '#8CBD9E',
      main: '#455D58',
      dark: '#F6F2F6',
      form: '#D9D9D9'
    },
    text: {
      light: '#FFF',
      main: '#000',
      dark: ''
    },
    response: {
      error: '#FFA800'
    }
  },
  breakpoints: {
    // * 320px
    xs: 'only screen and (max-width: 20em)',
    // * 600px
    sm: 'only screen and (max-width: 37.5em)',
    // * 800px
    md: 'only screen and (max-width: 50em)',
    // * 1024px
    lg: 'only screen and (max-width: 64em)'
  }
};

export default defaultTheme;
