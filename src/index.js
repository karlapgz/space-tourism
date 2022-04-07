import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'

import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)