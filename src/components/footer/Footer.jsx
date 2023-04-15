import React from 'react'
import './footer.css'
import LOGO from '../../assets/logos/strike.svg'

const Footer = () => {
  return (
    <section id='footer'>
        <div className="footer-container">
          <div className="logo">
            <img src={LOGO} alt="strike" />
          </div>
          <p className='copyright'>Strike 2022. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer