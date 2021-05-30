import React from "react"
import styled from "styled-components"
import { SectionWrapper, HeadlineTitle } from "../styles"
import { motion, AnimateSharedLayout } from "framer-motion"

import { fade } from "../animation"

import { useScroll } from "./useScroll"

import Toggle from "./Toggle"

const FaqSection = () => {
  const [element, controls] = useScroll()
  return (
    <FAQSection
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq-section"
    >
      <HeadlineTitle>
        Any Question <span>FAQ</span>
      </HeadlineTitle>
      <AnimateSharedLayout>
        <Toggle title="How do I start">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              autem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              autem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              autem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title="What Products do you Offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              autem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQSection>
  )
}

const FAQSection = styled(SectionWrapper)`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 5em;
  text-align: left;

  .answer {
    line-height: 1.5;
    display: block;
    padding: 1em 0;
  }
`

export default FaqSection
