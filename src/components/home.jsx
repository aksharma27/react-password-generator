import React, { useState } from 'react'
import Check from './Check'

const Home = () => {
    const [passwordGen, setPasswordGen] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    })

    const
    return (
        <div className='Home'>
            <div className="container">
                <h2>Random Password Generator</h2>
                <input type="text" placeholder='P4$5W0rD!' />
                <button> copy</button>
            </div>
            <Check value={ } onChange={ } />
        </div>
    )
}

export default Home
