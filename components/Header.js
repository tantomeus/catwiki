"use client";

import { styled } from "styled-components"
import Logo from "./Logo";
import Nav from "./Nav";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function Header() {
    
    return <HeaderStyled>
        <Logo/>
        <Nav/>
    </HeaderStyled>
}