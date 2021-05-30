import React from "react"
import styled from "styled-components"

// Router
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <StyledNavbar>
      <a className="logo" href="#">
        Capture
      </a>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  z-index: 3;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #282828;

  ul {
    display: flex;

    li {
      list-style-type: none;
      padding: 0 1em;

      &:hover {
        a {
          &:hover::after {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.5em 1em;
    transition: 300ms;
    position: relative;

    &::after {
      content: "";
      width: 50%;
      position: absolute;
      bottom: 0.2em;
      transform: scaleX(0);
      height: 0.25em;
      background-color: #23d997;
      transition: 300ms;
      left: 0;
      transform-origin: left;
    }
  }

  .logo {
    font-family: "Lobster", cursive;
    font-size: clamp(1.2em, 3vw, 2em);
  }
`

export default Navbar
