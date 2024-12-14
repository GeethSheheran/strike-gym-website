import React from 'react'
import './playlist.css'
import PLAY from '../../assets/logos/spotify.png'

const Playlist = () => {
  return (
    <div className='playlist-container'>
        <div className="playlist-text">
            <h2>Contact <span className='pink'>us</span></h2>
            <p>We’d love to hear from you! <br />
            Reach out to us for inquiries, support, or feedback.</p>
        </div>
        <button className='play-btn'><img src={PLAY} alt="play" /> Call</button>
    </div>
  )
}

export default Playlist