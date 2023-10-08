"use client";

import { getRandomCat } from "@/services/apiCats";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";

import Link from "next/link";

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    gap: ${(props = "4rem") => props.gap || "4rem"};

    & a:link, & a:visited, & button {
        text-decoration: none;
        color: var(--color-white);
        transition: var(--transition);
        background-color: transparent;
        border: none;
        font-size: ${props => props.fontSize || "1.8rem"};

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function Nav(style) {
    const pathname = usePathname();
    const router = useRouter();

    const active = {
        color: "var(--color-yellow)"
    }

    async function handleRandomCat() {
        const data = await getRandomCat();
        router.push(data);
    }

    return <NavStyled style={style}>
        <Link style={pathname.includes("/about") ? active : {}} href="/about">About</Link>
        <Link style={pathname.includes("/cats") ? active : {}}  href="/cats">Full Cat List</Link>
        <button onClick={handleRandomCat}>Random Cat</button>
    </NavStyled>
}