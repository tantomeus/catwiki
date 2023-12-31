"use client";

import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

import CatItem from "./CatItem";
import CatList from "./CatList";
import Heading from "./Headings";

const FullListStyled = styled.section`
    background-color: var(--color-grey-1);
    border-radius: 15px;
    padding: 2rem;

    & > h1 {
        margin-bottom: 3.2rem;
    }

    @media (max-width: 38.75em) {
        text-align: center;

        & ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default function FullList({ cats }) {

    useEffect(() => {
        document.title = "Full Cat List";
    }, [])
    
    return <FullListStyled as={motion.div} initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{delay: 1}}>
        <Heading as="h1" bar="true" variation="secondary">Breed List</Heading>
        <CatList>
            {cats.map((cat) => <CatItem cat={cat} key={cat.id} />)}
        </CatList>
    </FullListStyled>
}