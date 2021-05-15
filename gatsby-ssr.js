const React = require('react')
const { GlobalStyle } = require('./src/styles/GlobalStyles')
const { ThemeProvider } = require('styled-components')
const { light } = require('./src/styles/theme')

exports.wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}