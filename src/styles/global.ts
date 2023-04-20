import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: none;
  box-shadow: 0 0 0 1px ${(props) => props.theme.blue}
}

body {
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.1;
}

h1 {
 font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1.125rem;
}

p {
  line-height: 1.6;
}
`
