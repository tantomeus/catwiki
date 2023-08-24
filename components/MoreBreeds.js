"use client";

import { styled } from "styled-components";
import CatList from "./CatList";
import CatItem from "./CatItem";
import Link from "next/link";
import Heading from "./Headings";

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

const LinkStyled = styled.div`
    & a {
        color: var(--color-grey-2);
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        transition: var(--transition);

        &:hover {
            color: var(--color-yellow);
        }
    }
`;

export default function MoreBreeds({ data }) {
    const cats = [data[20], data[30], data[1], data[0]];

    return <MoreBreedsStyled>
        <Wrapper className="container">
            <Heading bar="true" as="span" variation="sub">Complete Breed List</Heading>
            <JustifyBetween>
                <Heading variation="primary">{data.length - 1}+ Breeds for you to explore</Heading>
                <LinkStyled><Link href="/cats">See more &rarr;</Link></LinkStyled>
            </JustifyBetween>
            <CatList>
                {cats.map((cat) => <CatItem cat={cat} key={cat.id} />)}
            </CatList>
        </Wrapper>
    </MoreBreedsStyled>
}