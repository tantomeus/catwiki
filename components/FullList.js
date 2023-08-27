"use client";

import { styled } from "styled-components";
import CatItem from "./CatItem";
import CatList from "./CatList";
import Heading from "./Headings";
import { motion } from "framer-motion";

const FullListStyled = styled.section`
    background-color: var(--color-grey-1);
    border-radius: 15px;
    padding: 2rem;

    & > h1 {
        margin-bottom: 3.2rem;
    }
`;

export default function FullList({ cats }) {
    
    return <FullListStyled as={motion.div} initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{delay: 1}}>
        <Heading as="h1" bar="true" variation="secondary">Breed List</Heading>
        <CatList>
            {cats.map((cat) => <CatItem cat={cat} key={cat.id} />)}
        </CatList>
    </FullListStyled>
}