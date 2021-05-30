import React from "react"
import styled from "styled-components"
import { HeadlineTitle } from "../styles"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { photoZoomAnim, fade } from "../animation"

const MovieComponent = ({ children, src, path }) => {
  return (
    <StyledMovie>
      <HeadlineTitle
        initial={{ color: "#fff", opacity: 0 }}
        animate={{ color: "#1b1b1b", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {children}
      </HeadlineTitle>
      <motion.p variants={fade}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, unde
        voluptates nobis fugit quis possimus.
      </motion.p>
      <div className="lower-container">
        <Link to={path}>
          <Hide>
            <motion.img
              variants={photoZoomAnim}
              className="cover"
              src={src}
              alt="our work"
            />
          </Hide>
        </Link>
      </div>
    </StyledMovie>
  )
}

const StyledMovie = styled.div`
  position: relative;
  padding: 1em 0 4em 0;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.2em;
    border-radius: 1em;
    background: #1b1b1b;
  }

  h2 {
    padding: 1em 0 0 0;
  }

  p {
    padding: 1em 0 2em;
    max-width: 40em;
    color: #1b1b1b;
  }

  .lower-container {
    width: 100%;
    display: flex;

    .cover {
      width: 100%;
      max-height: 65vh;
      object-fit: cover;
    }
  }
`

const Hide = styled.div`
  overflow: hidden;
`

export default MovieComponent
