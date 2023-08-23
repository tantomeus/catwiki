"use client";
import Link from "next/link";
import { styled } from "styled-components";

const NavStyled = styled.nav`
    display: flex;
    gap: 2rem;

    & a:link, & a:visited {
        text-decoration: none;
        color: var(--color-white);
        transition: var(--transition);

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function Nav() {
    return <NavStyled>
        <Link href="/about">About</Link>
        <Link href="/cats">Full Cats List</Link>
        <Link href="/random-cat">Random Cat</Link>
    </NavStyled> 
}