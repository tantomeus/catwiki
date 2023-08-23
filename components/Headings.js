"use client";

const { styled, css } = require("styled-components");

const variations = {
    primary: css`
        background-color: var(--color-grey-1);
        font-size: 4rem;
    `,
    sub: css`
        color: var(--color-grey-2);
        position: relative;

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
    `,
};

const Heading = styled.h2`
      ${props => variations[props.variation]};
`;

export default Heading;