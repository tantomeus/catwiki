"use client";

import { searchAlgo } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { styled } from "styled-components";

import Link from "next/link";

const SearchStyled = styled.form`
  background-color: var(--color-white);
  width: 40rem;
  height: 4rem;
  border-radius: 15px;
  display: flex;
`;

const InputWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  display: flex;
`;

const SearchInput = styled.input`
  color: var(--color-black);
  border: none;
  width: 100%;
  outline: none;
  padding: 1rem 1.8rem;
  border-radius: 15px;
`;

const DropDown = styled.ul`
  position: absolute;
  top: 5rem;
  z-index: 100;
  border-radius: 15px;
  max-height: 30rem;
  width: 100%;
  background-color: var(--color-white);
  overflow-y: auto;
  list-style-type: none;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;

  & > li {
    border-radius: 15px;
  }
`;

const SearchButton = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const Result = styled.li`

  &:hover {
    background-color: var(--color-grey-1);
  }

  & a:link, & a:visited {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-black);
    text-decoration: none;
    display: block;
    padding: 1rem;
  }
`;

export default function Search({ data }) {
  const [cats, setCats] = useState([]);
  const router = useRouter();

  function handleSearch(e) {
    setCats(data.filter((cat) => searchAlgo(cat.name, e.target.value)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!cats.length) return;
    router.push("cats/" + cats[0].id);
  }
  
  return <SearchStyled onSubmit={handleSubmit}>
    <InputWrapper>
      <SearchInput onChange={handleSearch} placeholder="Search..." type="text"/>

      {!!cats.length
      && <DropDown>
        {cats.map(cat => <Result key={cat.id}><Link href={`cats/${cat.id}`}>{cat.name}</Link></Result>)}
        </DropDown>}

      <SearchButton>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SearchButton>
      
    </InputWrapper>
  </SearchStyled>
}