import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { MovieState } from "../movieState"

import { HeadlineTitle } from "../styles"

// Animation
import { motion } from "framer-motion"
import { pageAnimation, scrollReveal } from "../animation"
import { useScroll } from "../components/useScroll"

const MovieDetail = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [movies, setMovies] = useState(MovieState)
  const [movie, setMovie] = useState(null)

  //Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie[0])
  }, [movies, url])

  const [element, controls] = useScroll()
  return (
    <React.Fragment>
      {movie && (
        <StyledMovieDetail
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <div className="intro">
              <HeadlineTitle>{movie.title}</HeadlineTitle>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                vitae quas facilis explicabo cum saepe.
              </p>
            </div>
            <img src={movie.mainImg} alt="movie" className="headline-img" />
          </Headline>
          <Awards
            variant={scrollReveal}
            ref={element}
            initial="hidden"
            animate={controls}
          >
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
            <img src={movie.thirdImg} alt="" />
            <img src={movie.mainImg} alt="" />
          </ImageDisplay>
        </StyledMovieDetail>
      )}
    </React.Fragment>
  )
}

const StyledMovieDetail = styled(motion.section)`
  padding-top: 4.5em;
  width: 100%;
`

const Headline = styled(motion.div)`
  color: white;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.521);
    top: 0;
    left: 0;
  }

  .intro {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      padding: 0;
    }

    p {
      max-width: 35em;
      text-align: center;
    }
  }

  .headline-img {
    max-height: 75vh;
    width: 100%;
    object-fit: cover;
    object-position: bottom center;
    position: relative;
  }
`

const Awards = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  margin: 5em 10em;
`

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledAward>
  )
}

const StyledAward = styled(motion.div)`
  color: white;
  padding: 2em 5em;
  margin: 5em 0;
  position: relative;
  width: 50%;
  flex: 1;

  &:nth-child(2)::after {
    content: "";
    width: 0.2em;
    height: 100%;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &:nth-child(2)::before {
    content: "";
    width: 0.2em;
    height: 100%;
    background: white;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  h3 {
    padding: 0.5em 0;
    position: relative;

    &::after {
      content: "";
      width: 25%;
      height: 0.2em;
      background: #23d997;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  p {
    padding: 1em 0;
    line-height: 1.5;
  }
`

const ImageDisplay = styled.div`
  img {
    width: 50%;
    height: 50vh;
    object-fit: cover;

    &:nth-child(3) {
      width: 100%;
    }
  }
`

export default MovieDetail
