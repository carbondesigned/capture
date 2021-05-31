import React from "react"
import home1 from "../img/home1.png"

import ScrollTop from "../components/ScrollTop"

// Styled
import styled from "styled-components"
import { StyledImage, SectionWrapper } from "../styles"

//Framer Motion
import { motion } from "framer-motion"
import { titleAnim, fade, photoSlideAnim } from "../animation"

import Wave from "./Wave"

const AboutSection = () => {
  // Framer Variants

  return (
    <StyledAboutHero>
      <SectionWrapper>
        <ScrollTop />
        <section className="hero-about">
          <div className="col-l">
            <div className="headline">
              <motion.div className="title">
                <div className="hide">
                  <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                </div>
                <div className="hide">
                  <motion.h2 variants={titleAnim}>
                    your <span>dreams</span> come
                  </motion.h2>
                </div>
                <div className="hide">
                  <motion.h2 variants={titleAnim}>true.</motion.h2>
                </div>
              </motion.div>
              <motion.p variants={fade} className="desc">
                Contact us for any photography or videography ideas that you
                have. We have professionals with amazing skills.
              </motion.p>
              <motion.a variants={fade} className="btn hero-cta">
                Contact us
              </motion.a>
            </div>
          </div>
          <div className="col-r">
            <StyledImage
              variants={photoSlideAnim}
              src={home1}
              alt="Guy with a camera taking pictures"
            />
          </div>
        </section>
      </SectionWrapper>
      <Wave />
    </StyledAboutHero>
  )
}

const StyledAboutHero = styled.section`
  .hero-about {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin-top: 2em;
    overflow-x: hidden;
  }

  @media only screen and (min-width: 1024px) {
    .hero-about {
      flex-direction: row;
    }
  }

  & .col-l {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    & .headline {
      padding: 5em;

      span {
        color: #23d997;
      }

      .title {
        font-size: clamp(1em, 2vw, 3em);
      }

      .hide {
        overflow: hidden;
      }

      .desc {
        padding: 2em 0 3em;
        line-height: 1.5;
      }

      .btn {
        background-color: transparent;
        &:hover {
          background-color: #23d997;
          color: #1b1b1b;
        }
      }
    }
  }

  & .col-r {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-top: 0.2em solid #23d997;
      border-right: 0.2em solid #23d997;
    }
  }
`

export default AboutSection
