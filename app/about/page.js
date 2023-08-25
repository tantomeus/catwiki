"use client";

import GroupOfImages from "@/components/GroupOfImages";
import Header from "@/components/Header";
import Heading from "@/components/Headings";
import ListOfReasons from "@/components/ListOfReasons";
import { styled } from "styled-components";

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Article = styled.article`
    background-color: var(--color-grey-1);
    padding: 5.4rem 3.6rem;
    margin-top: 7.2rem;
    border-radius: 50px;
    text-align: center;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6rem;

        max-width: 80rem;
        margin: 0 auto;
    }

    & p {
        color: var(--color-grey-2);
        letter-spacing: 1.2px;
    }
`;

export default function Page() {
    return <div className="container">
        <Header/>
        <HeadingWrapper>
            <Heading bar="barLg" barColor="var(--color-white)" color="var(--color-white)" as="h1" variation="primary">Why should you have a cat?</Heading>
        </HeadingWrapper>
        <Article>
           <div>
            <p>Cats are one of the best pets you can get. If you are hesitant to take on the responsibility of owning a pet, you might want to look again at the benefits of having a cat. They are sweet, quiet and independent, and hearing a cat’s purr can melt your heart. Here are the top five reasons you should own a cat.</p>
            <GroupOfImages/>
            <ListOfReasons/>
           </div>
        </Article>
    </div>
}