import React, { useState } from 'react';
import Nav from '../NavBar/NavBar'

import './Crew.css' 

import data from '../../data.json'

import douglas from '../../img/crew/image-douglas-hurley.png'
import mark from '../../img/crew/image-mark-shuttleworth.png'
import victor from '../../img/crew/image-victor-glover.png'
import anousheh from '../../img/crew/image-anousheh-ansari.png'

const Crew = () => {

    const [personal, setPersonal] = useState(0);

    const crew = data.crew;
    const crewImg = [douglas, mark, victor, anousheh]

    return (
        <section className='crew'>
            <Nav />   
            <main className='main-crew'>
                <div className='meet-crew-title'>
                    <span>02</span>
                    <p>Meet your crew</p>
                </div>
                <section className='info-crew'>
                    <div className='info-person'>
                        <h2>{crew[personal].role}</h2>
                        <h3>{crew[personal].name}</h3>
                        <p>{crew[personal].bio}</p>
                        
                        <div className='buttons'>
                            <button className='btn-crew' onClick={() => setPersonal(0)}></button>
                            <button className='btn-crew' onClick={() => setPersonal(1)}></button>
                            <button className='btn-crew' onClick={() => setPersonal(2)}></button>
                            <button className='btn-crew' onClick={() => setPersonal(3)}></button>
                        </div>
                    </div>
                    <figure className='figure-crew'>
                        <img className='image-crew' src={crewImg[personal]} alt={crew[personal].name}/>
                    </figure>
                </section>
            </main>
        </section>
    );
}

export default Crew;