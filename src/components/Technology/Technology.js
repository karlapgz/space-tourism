import React, { useState } from 'react';
import Nav from '../NavBar/NavBar'

import data from '../../data.json'

import './Technology.css' 

import vehicle from '../../img/technology/image-launch-vehicle-portrait.jpg'
import capsule from '../../img/technology/image-space-capsule-portrait.jpg'
import spaceport from '../../img/technology/image-spaceport-portrait.jpg'

const Technology = () => {

    const [launch, setLaunch] = useState(0)
    const images = [vehicle, capsule, spaceport]

    const tech = data.technology;

    return (
        <>
            <Nav />
            <main className='main-tech'>
                <div className='space-launch'>
                    <span>03</span>
                    <p>Space Launch 101</p>
                </div>
                <section className='info-tech'>
                    <div className='section-btn'>
                        <button className='btn-tech' onClick={() => setLaunch(0)}>1</button>
                        <button className='btn-tech' onClick={() => setLaunch(1)}>2</button>
                        <button className='btn-tech' onClick={() => setLaunch(2)}>3</button>
                    </div>
                    <div className='info'>
                        <h2>The terminology...</h2>
                        <h3>{tech[launch].name}</h3>
                        <p>{tech[launch].description}</p>
                    </div>
                    <figure>
                        <img className='image-tech' src={images[launch]} alt={tech[launch].name}/>
                    </figure>
                </section>
            </main>
        </>
    );
};

export default Technology;