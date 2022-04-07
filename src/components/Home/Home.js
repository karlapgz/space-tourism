import React from 'react';
import NavBar from  '../NavBar/NavBar'

import './Home.css'

const Home = () => {
    return ( 
        <section className='home'> 
            <NavBar />
            <main className='main-home'>
                <section>
                    <div className='title-main'>
                        <span>So you want to travel to</span>
                        <h1>space</h1>
                    </div>
                    <p>
                        Let’s face it; if you want to go to space, you might 
                        as well genuinely go to outer space and not hover kind 
                        of on the edge of it. Well sit back, and relax because 
                        we’ll give you a truly out of this world experience!
                    </p>
                </section>
                <button className='explore'>Explore</button>
            </main>
        </section>
    );
};

export default Home;