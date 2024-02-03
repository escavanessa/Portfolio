import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav className='sticky'>
                <div className='nav-ul'>
                    <a href='#hero-wrapper' className='nav-li'>Home</a>
                    <a href='#education' className='nav-li'>Education</a>
                    <a href='#projects' className='nav-li'>Projects</a>
                    <a href='#contact' className='nav-li'>Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Nav