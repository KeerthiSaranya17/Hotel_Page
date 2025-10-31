import Page from './Home'
import './App.css'
import About from './About'
import Contact from './Contact'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './NavBar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Accomodations from './Accomodations'
import DinnerOptions from './DinnerOptions'
import MeetingAndEvents from './MeetingAndEvents'
import SpaAndSwimming from '../SpaAndSwimming'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accomodations" element={<Accomodations/>}/>
        <Route path="/dinneroptions" element={<DinnerOptions/>}/>
        <Route path="/meetingandevents" element={<MeetingAndEvents/>}/>
        <Route path="/spaandswimmingpool" element={<SpaAndSwimming/>}/>

    </Routes>
    </>
  )
}

export default App
