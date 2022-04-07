import React, { useState } from 'react';
import Nav from '../NavBar/NavBar'
import data from '../../data.json'

import europa from '../../img/destination/image-europa.png'
import moon from '../../img/destination/image-moon.png'
import mars from '../../img/destination/image-mars.png'
import titan from '../../img/destination/image-titan.png'

import './Destination.css'

const Destination = () => {

    const [planet, setPlanet] = useState(0)

    const planetsImg = [moon, mars, europa, titan];
    
    let destination = data.destinations;

    console.log(data.destinations[0].description)

    return (
        <section className='destination'>
            <Nav/> 
            <main className='main-destination'> 
                <div className='pick-destination'>
                    <span>01</span>
                    <p>Pick your destination</p>
                </div>
                <section className='planet-body'>
                    <figure>
                        <img className='planet-img' src={planetsImg[planet]} alt='aa'/>
                    </figure>
                    <div className='planet-info'>
                        <div className='bnts-planets'>
                            <button className='btn-destination' onClick={() => setPlanet(0)}>Moon</button>
                            <button className='btn-destination' onClick={() => setPlanet(1)}>Mars</button>
                            <button className='btn-destination' onClick={() => setPlanet(2)}>Europa</button>
                            <button className='btn-destination' onClick={() => setPlanet(3)}>Titan</button>
                        </div>
                        <h1>{destination[planet].name}</h1>
                        <p className='planet-paragraph'>{destination[planet].description}</p>
                        <div className='line-divide'></div>
                        <div className='distance-travel-info'>
                            <div className='info'>
                                <span>Avg. distance</span>
                                <p>{destination[planet].distance}</p>
                            </div>
                            <div className='info'>
                                <span>Est. Travel time</span>
                                <p>{destination[planet].travel}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
};

export default Destination;