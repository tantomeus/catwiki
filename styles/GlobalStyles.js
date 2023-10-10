"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --color-yellow: rgb(242, 184, 86);
    --color-black: rgb(5, 6, 8);
    --color-grey-1: rgb(214, 211, 209);
    --color-grey-2: rgb(120, 113, 108);
    --color-white: white;
    --transition: all 0.4s;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-black);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

.container {
  max-width: 135rem;
  margin: 0 auto;
  padding: 0 4.5rem;
  position: relative;

  @media (max-width: 36.25em) {
    padding: 0 2.5rem;
  }
}
`;

export default GlobalStyles;