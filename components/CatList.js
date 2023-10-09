import { styled } from "styled-components";

const CatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 3rem;
    list-style-type: none;
    text-align: center;

    @media (max-width: 85em) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 34em) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default CatList;