import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

body {
    overflow-x: hidden;
}

h1,h2,h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}

`


export default GlobalStyle