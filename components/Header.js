"use client";

import { styled } from "styled-components";

import Logo from "./Logo";
import Nav from "./Nav";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 64em) {
        justify-content: center;

        & nav {
            display: none;
        }
    }
`;

export default function Header() {
    
    return <HeaderStyled>
        <Logo/>
        <Nav gap="10rem" fontSize="2rem"/>
    </HeaderStyled>
}