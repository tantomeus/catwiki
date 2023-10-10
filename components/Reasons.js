"use client";

import { styled } from "styled-components";

import Heading from "./Headings";
import GroupOfImages from "./GroupOfImages";
import SeeMoreButton from "./SeeMoreButton";
import MovingSection from "./MovingSection";

const Wrapper = styled.div`
    padding: 1rem 0;
    padding-left: 12rem;
    padding-right: 1rem;

    display: flex;
    gap: 3.2rem;

    @media (max-width: 74em) {
        padding: 3rem;
    }

    @media (max-width: 34em) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    & p {
        letter-spacing: 1.2px;
        font-size: 1.8rem;
        color: var(--color-grey-2);
    }

    @media (max-width: 74em) {

        & a {
            font-size: 1.6rem;
        }

        & p {
            font-size: 1.6rem;
        }
    }
`;

export default function Reasons() {

    return <MovingSection type="left">
        <Wrapper className="container">
            <GroupOfImages/>
            <Details>
                <Heading bar="barSm" color="var(--color-grey-2)" as="h3" variation="sub">Reasons</Heading>
                <Heading variation="primary">Why should you have a cat?</Heading>
                <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels.</p>
                <SeeMoreButton href="/about">Read more</SeeMoreButton>
            </Details>
        </Wrapper>
    </MovingSection>
}