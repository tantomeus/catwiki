"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";
import Characteristics from "@/components/Characteristics";
import Heading from "@/components/Headings";

const Container = styled.div`
    display: grid;
    grid-template-columns: 35rem 1fr;
    column-gap: 4rem;

    @media (max-width: 64em) {
        display: flex;
        gap: 3rem;
        flex-direction: column;
    } 

    @media (max-width: 30em) {
        grid-template-columns: 35rem 1fr;
    } 
`;

const ImageWrapper = styled.div`
    justify-self: center;
    align-self: center;

    @media (max-width: 26.5625em) {
        & img {
            width: 25rem;
            height: 25rem;
        } 
    }
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

    @media (max-width: 64em) {
        border-radius: 32px 32px 0 0;
        padding: 3.6rem;
    }

    @media (max-width: 30em) {
        & h1 {
            font-size: 3.2rem;
        }

        & p {
            font-size: 1.6rem;
        }
    }
`;

const GalleryWrapper = styled.div`
    padding: 5.4rem 3rem;
    background-color: var(--color-grey-1);
    border-radius: 0 0 32px 32px;

    
    @media (max-width: 30em) {
        & h2 {
            font-size: 2.4rem;
        }
    }
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 3.6rem;
    margin-top: 4.5rem;
    

    & > button {
        background-color: transparent;
        border: none;
    }

    @media (max-width: 82.5em) {
        & img {
            width: 22.5rem;
            height: 30rem;
        }
    }

    @media (max-width: 72.5em) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 56.25em) {
        gap: 1.8rem;

        & img {
            width: 18.5rem;
            height: 24rem;
        }
    }

    @media (max-width: 48em) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 33.75em) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Overlay = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    padding: 4rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    padding: 3rem;
    
    & > img {
        object-fit: contain;
    }

    @media (max-width: 61.25em) {
        & > img {
            width: 60rem;
            height: 40rem;
        }
    }

    @media (max-width: 48em) {
        & > img {
            width: 50rem;
            height: 30rem;
        }
    }

    @media (max-width: 42.5em) {
        & > img {
            width: 70vw;
            height: 30rem;
        }
    }
`;

export default function CatInfo({ data }) {
    const [openedImage, setOpenedImage] = useState("");

    const myLoader=({src})=>{
        return `${src}?w=${265}`;
    }

    function handleOpenImage(url) {
        setOpenedImage(url);
    }

    useEffect(() => {
        document.title = data.name;
    }, [data.name]);

    return <motion.div initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{delay: 1}}>
        <Container>
            <ImageWrapper>
                <Image
                style={{objectFit: "cover", borderRadius: "18px"}}
                loader={myLoader}
                width={350}
                height={350}
                src={data?.imgs?.[0].url}
                alt="cat"/>
            </ImageWrapper>

            <Info>
                <Heading as="h1" variation="primary">{data?.name}</Heading>
                <p>{data?.description}</p>
                <p><span>Temperament:</span> {data?.temperament}</p>
                <p><span>Origin:</span> {data?.origin}</p>
                <p><span>Lifespan:</span> {data?.life_span} years</p>
            </Info>
        </Container>

        <Characteristics data={data} />

        <GalleryWrapper>
            <Heading variation="secondary" bar="barMd">Other Photos</Heading>
            <Gallery>
            {data?.imgs?.slice(1).map( (img, i) => {
                return <button onClick={() => handleOpenImage(img.url)} key={i}>
                    <Image
                    style={{objectFit: "cover", borderRadius: "18px"}}
                    loader={myLoader}
                    width={265}
                    height={350}
                    src={img.url}
                    alt="cat"/>
                </button>
            })}
            </Gallery>
        </GalleryWrapper>

       {openedImage && createPortal(<Overlay onClick={() => setOpenedImage("")}>
            <Modal>
                <Image
                loader={myLoader}
                width={700}
                height={500}
                src={openedImage}
                alt="cat"/>
            </Modal>
        </Overlay>, document.querySelector(".container"))}
    </motion.div>;
}