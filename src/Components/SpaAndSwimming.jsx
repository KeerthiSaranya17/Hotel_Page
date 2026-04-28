import React from 'react'
import Contact from './Contact'
import swimming from '../assets/swimming.jpg'
import Spa from '../assets/spa.jpg'
import pool from '../assets/pool.jpg'

const SpaAndSwimming = () => {
  return (
    <div className='spa'>
      <img src={swimming}/>
      <h1>SpaAndSwimming</h1>
      <div className="spa-text">
          <p className="spa-subtitle">Relax. Refresh. Rejuvenate.</p>

          <p className="spa-desc">
            Step into a world of calm where luxury meets wellness. Unwind with
            soothing spa therapies and enjoy a refreshing swim in our serene
            poolside setting. Designed for comfort, tranquility, and total
            relaxation.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="spa-grid">

          <div className="spa-card">
            <img src={Spa} alt="Luxury Spa" />
            <div className="spa-overlay">
              <span>Spa Therapy</span>
            </div>
          </div>

          <div className="spa-card">
            <img src={pool} alt="Swimming Pool" />
            <div className="spa-overlay">
              <span>Swimming Pool</span>
            </div>
          </div>
        </div>
        <div>
          <Contact />
        </div>
    </div>
  )
}

export default SpaAndSwimming