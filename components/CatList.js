import { styled } from "styled-components";

const CatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 3rem;
    list-style-type: none;
    text-align: center;
`;

export default CatList;