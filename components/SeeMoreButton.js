"use client";

import Link from "next/link";
import { styled } from "styled-components";

const LinkStyled = styled.div`
    & a {
        color: var(--color-grey-2);
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        transition: var(--transition);

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function SeeMoreButton({ href, children }) {
    return <LinkStyled><Link href={href}>{children} &rarr;</Link></LinkStyled>
}