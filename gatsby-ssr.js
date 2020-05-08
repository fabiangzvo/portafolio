/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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