"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";

const SectionStyled = styled.section`
  background-color: var(--color-grey-1);
  border-radius: ${props => props.type === "left" ? "350px 0 0 350px" : "0 350px 350px 0"};
  ${props => props.type === "left" ? {marginTop: "5rem"} : ""};

  padding: 2rem 4rem;

  @media (max-width: 85em) {
    border-radius: 0;
  }

  @media (max-width: 60em) {
    & h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 48em) {
    & h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 34em) {
    & h2 {
      font-size: 2.2rem;
    }

    & h3 {
      font-size: 1.6rem;
    }

    & a:first-child {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 26.5625em) {
    & h2 {
      font-size: 2rem;
    }
  }
`;

export default function MovingSection({ children, type }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.4 });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return <div ref={ref} style={{ width: "100%", height: "100%", overflowX: "hidden" }}>
    <SectionStyled type={type} as={motion.section}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: type === "left" ? "90vw" : "-90vw", opacity: 0 },
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </SectionStyled>
  </div>
}