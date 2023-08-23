"use client";

import { styled } from "styled-components";
import Image from "next/image";
import Heading from "./Headings";

const SectionMoreStyled = styled.section`
    background-color: var(--color-grey-1);
    border-radius: 350px 0px 0px 350px;
    margin-top: 5rem;
`;

const Wrapper = styled.div`
    padding: 3rem 0;
    padding-left: 12rem;

    display: flex;
    gap: 3.2rem;
`;

const More = styled.span`
    color: var(--color-grey-2);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const Images = styled.div`
    display: grid;
    grid-template-columns: 30rem 30rem;
    grid-template-rows: 15rem 25rem;
    justify-items: end;
    align-items: end;
    gap: 2rem;

    & img:nth-child(2) {
        grid-column: 2/3;
        grid-row: 1/-1;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
`;

export default function Reasons() {
    return <SectionMoreStyled>
        <Wrapper className="container">
            <Images>
                <Image width={300} height={150} src="/images/image2.png" alt="cat"/>
                <Image width={300} height={420} src="/images/image3.png" alt="cat"/>
                <Image width={200} height={250} src="/images/image1.png" alt="cat"/>
            </Images>
            <Details>
                <Heading as="span" variation="sub">Reasons</Heading>
                <Heading variation="primary">Why should you have a cat?</Heading>
                <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
                <More>Read more &rarr;</More>
            </Details>
        </Wrapper>
    </SectionMoreStyled>
}