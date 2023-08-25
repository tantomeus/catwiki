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
`;

export default function GroupOfImages() {
    return <Images>
        <Image width={300} height={150} src="/images/image2.png" alt="cat"/>
        <Image width={300} height={420} src="/images/image3.png" alt="cat"/>
        <Image width={200} height={250} src="/images/image1.png" alt="cat"/>
    </Images>
}