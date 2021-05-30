import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { HeadlineTitle } from "../styles"

// img
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"

import MovieComponent from "../components/MovieComponent"

// Animation
import { motion } from "framer-motion"
import { pageAnimation, pageSlider } from "../animation"

const OurWork = () => {
  return (
    <StyledWorkSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Frame1 variants={pageSlider}></Frame1>
      <Frame2 variants={pageSlider}></Frame2>
      <Frame3 variants={pageSlider}></Frame3>
      <Frame4 variants={pageSlider}></Frame4>
      <div className="header">
        <HeadlineTitle
          initial={{ color: "#fff", y: -200, opacity: 0 }}
          animate={{ color: "#1b1b1b", y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Our <span>Work</span>
        </HeadlineTitle>
      </div>
      <MovieComponent
        children={"The Athlete"}
        path={"work/the-athlete"}
        src={athlete}
      />
      <MovieComponent
        children={"The Racer"}
        src={theracer}
        path={"work/the-racer"}
      />
      <MovieComponent
        children={"Good Times"}
        src={goodtimes}
        path={"work/good-times"}
      />
    </StyledWorkSection>
  )
}

const StyledWorkSection = styled(motion.section)`
  padding-top: 5em;
  color: white;
  padding: 5rem 10rem;
  overflow: hidden;
  display: grid;
  grid-auto-rows: auto;
  place-items: center;

  a {
    text-decoration: none;
    color: white;
  }

  .header {
    text-align: center;
  }
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 5%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
