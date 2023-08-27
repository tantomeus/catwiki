"use client";

import { styled } from "styled-components";

const SpinnerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-black);
`;

const Spinner = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 8rem;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 6.4rem;
        height: 6.4rem;
        margin: 0.8rem;
        border: 0.8rem solid #fff;
        border-radius: 50%;
        animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

export default function Loading() {
    return <SpinnerWrapper >
        <Spinner>
            <div></div><div></div><div></div><div></div>
        </Spinner>
    </SpinnerWrapper>
}