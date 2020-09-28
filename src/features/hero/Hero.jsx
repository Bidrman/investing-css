import React from 'react'

const Hero = ({ heading }) => {
    return (
        <div className='w-100 text-center'>
            <h1 className='hero__heading'>{heading}</h1>
        </div>
    )
}

export default Hero
