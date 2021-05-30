import React, { useState } from "react"
import styled from "styled-components"

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <StyledToggle onClick={() => setToggle(!toggle)}>
      {toggle ? children : ""}
    </StyledToggle>
  )
}

const StyledToggle = styled.div`
  cursor: pointer;
`

export default Toggle
