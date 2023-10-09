"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";
import { useEffect } from "react";

import GroupOfImages from "@/components/GroupOfImages";
import Header from "@/components/Header";
import Heading from "@/components/Headings";
import ListOfReasons from "@/components/ListOfReasons";

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 48rem) {
        & h1 {
            font-size: 3.2rem;
        }
    }

    @media (max-width: 35rem) {
        & h1 {
            font-size: 2.5rem;

            &::after {
                display: none;
            }
        }
    }

    @media (max-width: 28.75rem) {
        & h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;

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

    @media (max-width: 48rem) {
        & p {
            font-size: 1.4rem;
        }

        & h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 35rem) {
        margin-top: 3.5rem;
        
        & p {
            font-size: 1.4rem;
        }

        & h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 27rem) {
        padding: 2.7rem 1.8rem;

        & > div > div {
            grid-template-columns: 22.5rem;
            grid-template-rows: 11.25rem 18.75rem;

            & img:nth-child(1) {
                display: none;
            }

            & img:nth-child(2) {
                grid-column: 1/-1;
                grid-row: 1/-1;
                width: 22.5rem;
                height: 31.5rem;
            }

            & img:nth-child(3) {
                display: none;
            }
        }
    }

    @media (max-width: 23.75rem) {
        & > div > div {
            grid-template-columns: 20rem;

            & img:nth-child(2) {
                width: 20rem;
            }
        }
    }
`;

export default function About() {

    useEffect(() => {
        document.title = "About"
    }, []);

    return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 20}}
    transition={{ delay: 1 }}
    className="container">
        <Header/>
        <HeadingWrapper>
            <Heading bar="barLg"barColor="var(--color-white)" color="var(--color-white)" as="h1" variation="primary">
                Why should you have a cat?
            </Heading>
        </HeadingWrapper>
        <Article>
           <div>
            <p>Cats are one of the best pets you can get. If you are hesitant to take on the responsibility of owning a pet, you might want to look again at the benefits of having a cat. They are sweet, quiet and independent, and hearing a cat’s purr can melt your heart. Here are the top five reasons you should own a cat.</p>
            <GroupOfImages/>
            <ListOfReasons/>
           </div>
        </Article>
    </motion.div>)
}