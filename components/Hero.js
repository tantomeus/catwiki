"use client";
import Image from "next/image";
import { styled } from "styled-components"
import Search from "./Search";
import Link from "next/link";
import { useRandomCat } from "@/hooks/useRandomCat";

const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background: url("/images/HeroImagelg.png") center center / cover no-repeat;
  height: 80vh;
  color: var(--color-grey-1);
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin-left: 10rem;

  & > a:link, & > a:visited {
    color: var(--color-yellow);
    text-decoration: none;
    font-weight: 600;
  }
`;

export default function Hero({ data }) {
  const { randomCat } = useRandomCat();

  return <HeroStyled className="container">
    <Image height={100} width={300} src="/icons/CatwikiLogo.svg" alt="logo"/>
    <h2>Get to know more about your cat breed</h2>
    <Search data={data}/>
    <Text>or try a <Link href={randomCat}>random</Link> breed</Text>
  </HeroStyled>
}