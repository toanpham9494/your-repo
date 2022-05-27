import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={MainVideo} type='video/mp4' />
        </video>
        <div className='hero-text'>
            <h1>Decentralized</h1>
            <h1><span className='blue'>Trading</span>Protocol</h1>
            <p>Guaranteed liquidity trading for millions of users and top Ethereum application</p>
            <div className='btn-group'>
                <button className='btn'>Login</button> 
                <button className='btn btn-outline'>Contact</button>
            </div>

            <div className='bottom-text'>
                <h2>Total Volume Secured: $1,294,498,240</h2>
            </div>

        </div>

    </div>
  )
}

export default Hero