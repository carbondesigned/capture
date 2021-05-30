import styled from "styled-components"
import { motion } from "framer-motion"

export const HeadlineTitle = styled(motion.h2)`
  padding: 1em 0;
  font-size: clamp(1.6em, 3vw, 5em);
  color: white;

  & span {
    color: #23d997;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  padding: 5em;

  @media only screen and (min-width: 1024px) {
    & {
      flex-direction: row-reverse;
    }
  }

  & .col-l {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
  }

  & .col-r {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;
  padding: 2em 0;
  color: white;

  h3 {
    color: #1b1b1b;
    background: white;
    font-size: clamp(1.1em, 3vw, 2em);
  }

  & .card {
    max-width: 12em;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 2fr);
  }
`

export const StyledImage = styled(motion.img)`
  max-width: 75%;
`
