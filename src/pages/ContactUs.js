import React from "react"

// Animation
import { motion } from "framer-motion"
import { pageAnimation, titleAnim } from "../animation"
import { HeadlineTitle } from "../styles"
import styled from "styled-components"

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="contact-wrapper">
        <div className="header">
          <Hide>
            <HeadlineTitle variants={titleAnim}>Get in touch.</HeadlineTitle>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnim} className="sub-header">
              Contact with any <span>inquiries</span>, <span>questions</span> or{" "}
              <span>feedback</span>!
            </motion.h3>
          </Hide>
        </div>
        <div className="social-links">
          <div className="social-link">Send us a message.</div>
        </div>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled(motion.section)`
  padding-top: 5em;
  color: #888888;

  .contact-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .sub-header {
        font-weight: 400;
      }

      span {
        color: #23d997;
      }
    }

    h2 {
      padding: 0;
    }

    .social-links {
      width: 100%;
      color: #adadad;
      font-weight: 700;
      font-size: clamp(2em, 6vw, 3.5em);
      position: relative;

      .social-link {
        padding: 1em;
        margin-left: 2em;
        background-color: black;
        &::after {
          content: "";
          position: absolute;
          height: 0.5em;
          width: 0.5em;
          border-radius: 50%;
          background-color: #23d997;
          left: 0;
          top: 1.5em;
        }
      }
    }
  }
`

const Hide = styled.div`
  overflow: hidden;
`

export default ContactUs
