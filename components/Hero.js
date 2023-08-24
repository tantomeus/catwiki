"use client";
import Image from "next/image";
import { styled } from "styled-components"
import Search from "./Search";

const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background: url("images/HeroImagelg.png") center center / cover no-repeat;
  height: 80vh;
  color: var(--color-grey-1);
`;

export default function Hero() {
    return <HeroStyled className="container">
      <Image height={100} width={300} src="icons/CatwikiLogo.svg" alt="logo"/>
      <h2>Get to know more about your cat breed</h2>
      <Search/>
      <p>or try a random breed</p>
  </HeroStyled>
}