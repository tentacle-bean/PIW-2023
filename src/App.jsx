import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

import Home from './components/Home'
import About from './components/About'
import Tours from './components/Tours'
import Footer from './components/Footer'
import AddNew from './components/Add'

import data from './assets/data.js'
import TourPage from './components/TourPage'

export default function App(){
    const [toursData, setToursData] = useState(data)

    const addTour = (newTour) => {
        setToursData(toursData => [...toursData, newTour])
    }

    return(
        <>
            <Router>
                <nav className="navbar">
                    <p className="logo">Evilla</p>
                    
                    <div className="navbar-links">
                        <Link to='/'>
                            <button className="navbar-link paragraph btn">Home</button>
                        </Link>
                        <Link to='/'>
                            <button className="navbar-link paragraph btn">About</button>
                        </Link>
                        <Link to='/'>
                            <button className="navbar-link paragraph btn">House tours</button>
                        </Link>
                        <Link to='/'>
                            <button className="navbar-link paragraph btn">Contact</button>
                        </Link>
                        <Link to='/add-a-new'>
                            <button className="navbar-link paragraph btn btn-yellow">Add new</button>
                        </Link>
                    </div>
                </nav>

                <Routes>
                    <Route path='/add-a-new' element={<><AddNew addTour={addTour}/></>}/>
                    <Route path='/tour/:id' element={<><TourPage toursData={toursData}/></>}/>
                    <Route path='/*' element={<><Home/><About/><Tours toursData={toursData}/></>} />
                </Routes>
            </Router>

            

            
            <Footer/>
        </>
    )
}