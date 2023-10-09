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

  @media (max-width: 64em) {
    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 48em) {
    background: var(--color-black);
    padding: 5rem 0;
    height: initial;
    align-items: center;

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 30em) {
    img {
      height: 7.5rem;
      width: 25rem;
    }

    h2 {
      text-align: center;
      font-size: 1.4rem;
    }
  }
`;

const ImageWrapper = styled.div`
  display: none;
  background: url("/images/HeroImagelg.png") right / cover no-repeat;
  position: relative;

  @media (max-width: 48em) {
    display: block;
    border-radius: 50%;
    min-height: 30rem;
    width: 30rem;
    transform-style: preserve-3d;

    &::before {
      content: "";
      display: block;
      height: 31rem;
      width: 31rem;
      background-color: var(--color-white);
      border-radius: 50%;

      position: absolute;
      transform: translateZ(-1px);
      top: -1rem;
      right: -1rem;
    }
  }

  @media (max-width: 30em) {
    min-height: 20rem;
    width: 20rem;

    &::before {
      height: 21rem;
      width: 21rem;
    }
  }
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

  @media (max-width: 48em) {
    margin-left: 0;
  }
`;

export default function Hero({ data }) {
  const router = useRouter();

  async function handleRandomCat() {
    const data = await getRandomCat();
    router.push(data);
}

  return <HeroStyled className="container">
    <ImageWrapper>
    </ImageWrapper>
    <Image height={100} width={300} src="/icons/CatwikiLogo.svg" alt="logo"/>
    <h2>Get to know more about your cat breed</h2>
    <Search data={data}/>
    <Text>or try a <button onClick={handleRandomCat}>random</button> breed</Text>
  </HeroStyled>
}