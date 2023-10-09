import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

const CatItemStyled = styled.li`
    cursor: pointer;

    & a:link, & a:visited {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        div::before {
            left: -10px;
        }

        span {
            color: var(--color-yellow);
        }
    }
`;

const Name = styled.span`
    font-size: 1.8rem;
    font-weight: 600;
    transition: var(--transition);
`;  

const ImageWrapper = styled.div`
    width: 27.5rem;
    height: 25rem;
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        border-radius: 12px;
        background-color: var(--color-yellow);
        height: 100%;
        width: 100%;
        transition: var(--transition);
    }

        
    @media (max-width: 48em) {
        width: 22.5rem;
        height: 20rem;

        & img {
            width: 22.5rem;
            height: 20rem;
        }
    }

    @media (max-width: 34em) {
        width: 27.5rem;
        height: 25rem;

        & img {
            width: 27.5rem;
            height: 25rem;
        }
    }

    @media (max-width: 26.7em) {
        width: 22.5rem;
        height: 20rem;

        & img {
            width: 22.5rem;
            height: 20rem;
        } 
    }

    @media (max-width: 22.5em) {
        width: 18.5rem;
        height: 16rem;

        & img {
            width: 18.5rem;
            height: 16rem;
        } 
    }
`;

export default function CatItem({ cat }) {

    const myLoader=({src})=>{
        return `${src}?w=${275}`;
    }

    return <CatItemStyled>
        <Link href={`cats/${cat.id}`}>
            <ImageWrapper>
                <Image
                style={{objectFit: "cover", borderRadius: "12px"}}
                loader={myLoader}
                width={275}
                height={250}
                src={cat?.img?.url}
                alt={cat.name}/>
            </ImageWrapper>
            <Name>{cat?.name}</Name>
        </Link>
    </CatItemStyled>
}