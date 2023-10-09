"use client";

import Image from "next/image";
import { styled } from "styled-components";

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

    @media (max-width: 74em) {
        grid-template-columns: 22.5rem 22.5rem;
        grid-template-rows: 11.25rem 18.75rem;

        & img:nth-child(1) {
            width: 22.5rem;
            height: 11.25rem;
        }

        & img:nth-child(2) {
            width: 22.5rem;
            height: 31.5rem;
        }

        & img:nth-child(3) {
            width: 15rem;
            height: 18.75rem;
        }
    }

    @media (max-width: 60em) {
        grid-template-columns: 22.5rem;
        grid-template-rows: 11.25rem 18.75rem;

        & img:nth-child(1) {
            display: none;
        }

        & img:nth-child(2) {
            grid-column: 1/-1;
            grid-row: 1/-1;
        }

        & img:nth-child(3) {
            display: none;
        }
    }

    
    @media (max-width: 34em) {
        grid-template-columns: 15rem 15rem;
        grid-template-rows: 7.5rem 12.5rem;

        & img:nth-child(1) {
            display: block;
            width: 15rem;
            height: 7.5rem;
        }

        & img:nth-child(2) {
            grid-column: 2/3;
            grid-row: 1/-1;
            width: 15rem;
            height: 22.5rem;
        }

        & img:nth-child(3) {
            display: block;
            width: 10rem;
            height: 12.5rem;
        }
    }

    @media (max-width: 22.5rem) {
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
`;

export default function GroupOfImages() {
    return <Images>
        <Image width={300} height={150} src="/images/image2.png" alt="cat"/>
        <Image width={300} height={420} src="/images/image3.png" alt="cat"/>
        <Image width={200} height={250} src="/images/image1.png" alt="cat"/>
    </Images>
}