import React from "react"

//Router
import { Switch, Route, useLocation } from "react-router-dom"

// Animation
import { AnimatePresence } from "framer-motion"

// Pages imports
import AboutUs from "./pages/AboutUs"
import OurWork from "./pages/OurWork"
import ContactUs from "./pages/ContactUs"
import MovieDetail from "./pages/MovieDetail"

//Global Styling
import GlobalStyle from "./components/GlobalStyle"

// Navbar
import Navbar from "./components/Navbar"

const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
