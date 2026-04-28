import './App.css'
import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Accomodations from './Components/Accomodations'
import DinnerOptions from './Components/DinnerOptions'
import MeetingAndEvents from './Components/MeetingAndEvents'
import SpaAndSwimming from './Components/SpaAndSwimming'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodations" element={<Accomodations />} />
        <Route path="/dinneroptions" element={<DinnerOptions />} />
        <Route path="/meetingandevents" element={<MeetingAndEvents />} />
        <Route path="/spaandswimmingpool" element={<SpaAndSwimming />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App