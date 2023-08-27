"use client";

import Characteristics from "@/components/Characteristics";
import Heading from "@/components/Headings";
import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    column-gap: 4rem;
`;

const ImageWrapper = styled.div`
    justify-self: center;
    align-self: center;
`;

const Info = styled.div`
    background-color: var(--color-grey-1);
    padding: 5.4rem 3.6rem 3.6rem 18rem;
    border-radius: 270px 36px 0px 0px;
    letter-spacing: 1.5px;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;

    & p {
        color: rgb(120, 113, 108);
    }

    & span {
        color: black;
        font-weight: 700;
    }
`;

const GalleryWrapper = styled.div`
    grid-column: 1/-1;

    padding: 5.4rem 3rem;
    background-color: var(--color-grey-1);
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 3.6rem;
    margin-top: 4.5rem;
`;

export default function CatInfo({ data }) {

    const myLoader=({src})=>{
        return `${src}?w=${265}`;
    }

    return <Container as={motion.div} initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{delay: 1}}>
        <ImageWrapper><Image style={{objectFit: "cover", borderRadius: "18px"}} loader={myLoader} width={350} height={350} src={data?.imgs[0]?.url} alt="cat"/></ImageWrapper>
        <Info>
            <Heading as="h1" variation="primary">{data?.name}</Heading>
            <p>{data?.description}</p>
            <p><span>Temperament:</span> {data?.temperament}</p>
            <p><span>Origin:</span> {data?.origin}</p>
            <p><span>Lifespan:</span> {data?.life_span} years</p>
        </Info>
        <Characteristics data={data} />
        <GalleryWrapper>
            <Heading variation="secondary" bar="barMd">Other Photos</Heading>
            <Gallery>
            {data?.imgs.slice(1).map( (img, i) => <Image key={i} style={{objectFit: "cover", borderRadius: "18px"}} loader={myLoader} width={265} height={350} src={img.url} alt="cat"/>)}
            </Gallery>
        </GalleryWrapper>
    </Container>;
}