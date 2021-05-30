import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <StyledToggle layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div layout className="line"></motion.div>
    </StyledToggle>
  )
}

const StyledToggle = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  margin: 2em 0;
  padding: 1em;

  h4 {
    color: #fff;
    font-size: clamp(1.3rem, 3vw, 2rem);
  }

  .line {
    width: 100%;
    height: 0.2em;
    background-color: white;
    margin-top: 1em;
  }
`

export default Toggle
