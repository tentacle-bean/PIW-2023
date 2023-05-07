import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React from 'react'

import Home from './components/Home'
import About from './components/About'
import Tours from './components/Tours'
import Footer from './components/Footer'
import AddNew from './components/AddNew'

import TourPage from './components/TourPage'

export default function App(){
    

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
                    <Route path='/add-a-new' element={<><AddNew/></>}/>
                    <Route path='/tour/:id' element={<><TourPage/></>}/>
                    <Route path='/*' element={<><Home/><About/><Tours/></>} />
                </Routes>
            </Router>

            

            
            <Footer/>
        </>
    )
}