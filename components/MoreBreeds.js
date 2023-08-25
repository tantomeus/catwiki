"use client";

import { styled } from "styled-components";
import CatList from "./CatList";
import CatItem from "./CatItem";
import Heading from "./Headings";
import SeeMoreButton from "./SeeMoreButton";

const MoreBreedsStyled = styled.section`
    background-color: var(--color-grey-1);
    border-radius: 0px 350px 350px 0px;
`;

const JustifyBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 3rem 0 5rem 0;
    padding-right: 8rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

export default function MoreBreeds({ data }) {
    const cats = [data[20], data[30], data[50], data[0]];

    return <MoreBreedsStyled>
        <Wrapper className="container">
            <Heading bar="barSm" color="var(--color-grey-2)" as="h3" variation="sub">Complete Breed List</Heading>
            <JustifyBetween>
                <Heading variation="primary">{data.length - 1}+ Breeds for you to explore</Heading>
                <SeeMoreButton href="/cats">Show more</SeeMoreButton>
            </JustifyBetween>
            <CatList>
                {cats.map((cat) => <CatItem cat={cat} key={cat.id} />)}
            </CatList>
        </Wrapper>
    </MoreBreedsStyled>
}