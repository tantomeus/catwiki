"use client";

const { styled, css } = require("styled-components");

const bar = css`
    &::after {     
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 0px;
        background-color: var(--color-grey-2);
        width: 100px;
        height: 5px;
        border-radius: 2px;
    }
`

const variations = {
    primary: css`
        background-color: var(--color-grey-1);
        font-size: 4rem;
    `,
    secondary: css`
        font-size: 2.8rem;
    `,
    sub: css`
        color: var(--color-grey-2);
    `,
};

const Heading = styled.h2`
    position: relative;
    ${props => variations[props.variation]};
    ${props => props.bar && bar};
`;

export default Heading;