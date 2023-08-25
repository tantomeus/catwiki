"use client";
import { useRandomCat } from "@/hooks/useRandomCat";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

const NavStyled = styled.nav`
    display: flex;
    gap: 2rem;

    & a:link, & a:visited {
        text-decoration: none;
        color: var(--color-white);
        transition: var(--transition);
        font-size: 1.8rem;

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function Nav() {
    const {randomCat} = useRandomCat();
    const router = usePathname();

    const active = {
        color: "var(--color-yellow)"
    }

    return <NavStyled>
        <Link style={router === "/about" ? active : {}} href="/about">About</Link>
        <Link style={router === "/cats" ? active : {}}  href="/cats">Full Cat List</Link>
        <Link href={randomCat}>Random Cat</Link>
    </NavStyled>
}