"use client";

import { styled } from "styled-components";
import { useEffect } from "react";

import CatList from "./CatList";
import CatItem from "./CatItem";
import Heading from "./Headings";
import SeeMoreButton from "./SeeMoreButton";
import MovingSection from "./MovingSection";

const Wrapper = styled.div`
    padding: 1rem 8rem 5rem 0;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: 85em) {
        padding: 3rem 8rem 5rem 3rem;
    }

    @media (max-width: 48em) {
        padding: 3rem 3rem 5rem 3rem;
    }
`;

const JustifyBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 60em) {
        & a {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 48em) {
        flex-direction: column;
        align-items: start;
        gap: 1rem;

        & a {
            font-size: 1.6rem;
        }
    }
`;

export default function MoreBreeds({ data }) {
    const cats = [data[20], data[30], data[50], data[0]];

    useEffect(() => {
        document.title = "Home";
    }, []);

    return <MovingSection>
        <Wrapper className="container">
            <Heading bar="barSm" color="var(--color-grey-2)" as="h3" variation="sub">Complete Breed List</Heading>

            <JustifyBetween>
                <Heading variation="primary">{data.length}+ Breeds for you to explore</Heading>
                <SeeMoreButton href="/cats">Show more</SeeMoreButton>
            </JustifyBetween>
            
            <CatList>
                {cats.map((cat) => <CatItem cat={cat} key={cat.id} />)}
            </CatList>
        </Wrapper>
    </MovingSection>
}