"use client";

const { styled, css } = require("styled-components");

const bars = {
    barSm: css`
        &::after {     
            content: "";
            position: absolute;
            bottom: -1rem;
            left: 0;
            width: 10rem;
            height: 0.5rem;
            border-radius: 2px;
            background-color: ${props => props.color};
        }
    `,
    barMd: css`
        &::after {     
            content: "";
            position: absolute;
            bottom: -1rem;
            left: 0;
            width: 12.5rem;
            height: 0.5rem;
            border-radius: 2px;
            background-color: var(--color-yellow);
        }
    `,
    barLg: css`
        &::after {     
            content: "";
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 20rem;
            height: 0.5rem;
            border-radius: 2px;
            background-color: ${props => props.color};
        }
    `

}

const variations = {
    primary: css`
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
    ${props => bars[props.bar]};
    color: ${props => props.color};
`;

export default Heading;