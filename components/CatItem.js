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
    width: 275px;
    height: 250px;
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
`;

export default function CatItem({ cat }) {

    const myLoader=({src})=>{
        return src;
    }

    return <CatItemStyled>
        <Link href={`cats/${cat.id}`}>
            <ImageWrapper>
                <Image style={{objectFit: "cover", borderRadius: "12px"}} loader={myLoader} width={275} height={250} src={cat?.img?.url} alt={cat.name}/>
            </ImageWrapper>
            <Name>{cat?.name}</Name>
        </Link>
    </CatItemStyled>
}