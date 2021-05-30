import React from "react"
import { HeadlineTitle, SectionWrapper, CardGrid, StyledImage } from "../styles"
import styled from "styled-components"

import { fade } from "../animation"
import { useScroll } from "./useScroll"

// Import Icons
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"

const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <section>
      <ServiceSectionWrapper
        className="services"
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <div className="col-l">
          <HeadlineTitle>
            High <span>Quality</span> services.
          </HeadlineTitle>
          <CardGrid className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="A clock icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="Another icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="A money icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="A icon" />
                <h3>Team Work</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </CardGrid>
        </div>
        <div className="col-r">
          <div className="img">
            <Image src={home2} alt="" />
          </div>
        </div>
      </ServiceSectionWrapper>
    </section>
  )
}

const ServiceSectionWrapper = styled(SectionWrapper)`
  .col-l {
    align-items: flex-start;
  }
`

const Image = styled(StyledImage)`
  border-top: 0.2em solid #23d997;
  border-left: 0.2em solid #23d997;
`

export default ServicesSection
