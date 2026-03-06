import Page from './Components/Home'
import './App.css'
import About from './Components/About'
// import Contact from './Contact'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Accomodations from './Components/Accomodations'
import DinnerOptions from './Components/DinnerOptions'
import MeetingAndEvents from './Components/MeetingAndEvents'
import SpaAndSwimming from './Components/SpaAndSwimming'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/accomodations" element={<Accomodations/>}/>
        <Route path="/dinneroptions" element={<DinnerOptions/>}/>
        <Route path="/meetingandevents" element={<MeetingAndEvents/>}/>
        <Route path="/spaandswimmingpool" element={<SpaAndSwimming/>}/>

    </Routes>
    </>
  )
}

export default App
