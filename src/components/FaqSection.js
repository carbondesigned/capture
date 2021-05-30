import React from "react"
import styled from "styled-components"
import { SectionWrapper, HeadlineTitle } from "../styles"

const FaqSection = () => {
  return (
    <FAQSection className="faq-section">
      <HeadlineTitle>
        Any Question <span>FAQ</span>
      </HeadlineTitle>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            autem.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            autem.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            autem.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="question">
        <h4>Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            autem.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="question">
        <h4>What Products do you Offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            autem.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </FAQSection>
  )
}

const FAQSection = styled(SectionWrapper)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2em;

  & .question {
    padding: 2em;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: white;
      bottom: 0;
    }

    h4 {
      font-size: clamp(1.1em, 3vw, 1.4em);
      padding-bottom: 1em;
    }
  }
`

export default FaqSection
