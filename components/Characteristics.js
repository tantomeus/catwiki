"use client";

import Heading from "./Headings";

import { css, styled } from "styled-components";

const Details = styled.div`
    background-color: var(--color-white);
    border-radius: 32px 0 0 0;
    padding: 5.4rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 35rem));
    justify-content: center;
    gap: 2rem 4rem;

    & > h2 {
        grid-column: 1/-1;
        margin-bottom: 3rem;
    }

    & h3 {
        margin-bottom: 1.5rem;
    }

    @media (max-width: 64em) {
        border-radius: 0;
    }

    @media (max-width: 30em) {
        & h2 {
            font-size: 2.4rem;
        }
    }

    @media (max-width: 23.4375em) {
        grid-template-columns: 1fr;
    }
`;

const DetailsGroup = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 23.4375em) {
        justify-content: start;
    }
`;

const variations = {
    fill: css`
        background-color: var(--color-grey-1);
    `,
    empty: css`
        background-color: var(--color-yellow);
    `
}

const DetailsItem = styled.span`
    display: block;
    width: 5rem;
    height: 1.2rem;
    border-radius: 15px;

    ${props => variations[props.variation]};

    @media (max-width: 23.4375em) {
        width: 4rem;
    }
`;

export default function Characteristics({ data }) {

    function createDetailItems(data) {
        return Array.from({length: 5}, (_, i) => {
            const variation = i < data ? "empty" : "fill";
            return <DetailsItem key={i} variation={variation}/>
        });
    } 

    return <Details>
        <Heading variation="secondary" bar="barMd">Breed Characteristics</Heading>
        <div>
            <h3>Adaptability:</h3>
            <DetailsGroup>
                {createDetailItems(data?.adaptability)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Affection Level:</h3>
            <DetailsGroup>
                {createDetailItems(data?.affection_level)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Child Friendly:</h3>
            <DetailsGroup>
                {createDetailItems(data?.child_friendly)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Dog Friendly:</h3>
            <DetailsGroup>
                {createDetailItems(data?.dog_friendly)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Energy Level:</h3>
            <DetailsGroup>
                {createDetailItems(data?.energy_level)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Grooming:</h3>
            <DetailsGroup>
                {createDetailItems(data?.grooming)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Health Issues:</h3>
            <DetailsGroup>
                {createDetailItems(data?.health_issues)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Intelligence:</h3>
            <DetailsGroup>
                {createDetailItems(data?.intelligence)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Social Needs:</h3>
            <DetailsGroup>
                {createDetailItems(data?.social_needs)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Stranger Friendly:</h3>
            <DetailsGroup>
                {createDetailItems(data?.stranger_friendly)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Shedding level:</h3>
            <DetailsGroup>
                {createDetailItems(data?.shedding_level)}
            </DetailsGroup>
        </div>
        <div>
            <h3>Vocalisation:</h3>
            <DetailsGroup>
                {createDetailItems(data?.vocalisation)}
            </DetailsGroup>
        </div>
    </Details>
}