"use client";

import { styled } from "styled-components";
import { getRandomCat } from "@/services/apiCats";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Search from "./Search";

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

  & > button, & > button {
    color: var(--color-yellow);
    text-decoration: none;
    font-weight: 600;
    border: none;
    background-color: transparent;
  }
`;

export default function Hero({ data }) {
  const router = useRouter();

  async function handleRandomCat() {
    const data = await getRandomCat();
    router.push(data);
}

  return <HeroStyled className="container">
    <Image height={100} width={300} src="/icons/CatwikiLogo.svg" alt="logo"/>
    <h2>Get to know more about your cat breed</h2>
    <Search data={data}/>
    <Text>or try a <button onClick={handleRandomCat}>random</button> breed</Text>
  </HeroStyled>
}