"use client";

import { styled } from "styled-components";
import Nav from "./Nav";
import Logo from "./Logo";

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.5rem 0;
    color: var(--color-grey-1);
`;

const Reference = styled.div`
    text-align: right;

    & + & {
        margin-top: 1rem;
    }

    & p {
        font-size: 1.4rem;
    }

    & a:link, & a:visited {
        text-decoration: none;
        color: var(--color-white);
        transition: var(--transition);
        font-size: 1.8rem;
        font-weight: 700;

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function Footer() {
    return <FooterStyled className="container">
        <Logo/>
        <Nav/>
        <div>
            <Reference>
                <p>made by</p>
                <a href="https://github.com/tantomeus">tantomeus</a>
            </Reference>
            <Reference>
                <p>inspired by</p>
                <a href="https://devchallenges.io">devchallenges</a>
            </Reference>
        </div>
    </FooterStyled>
}