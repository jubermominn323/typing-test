import React from 'react'
import './Nav.css'

const Nav = () =>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img src="https://air-marketing-assets.imgix.net/blog/logo-db/flash-logo/flash-logo-png-1.png?auto=format&fit=max&ixlib=react-9.0.2&h=270&w=576" 
                    alt="Logo"
                    className="flash-logo"
                />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a 
                target="_blank"
                href="https://github.com/jubermominn323"
                className="nav-link"
                rel="noreferrer">
                    A.A.M.
                </a>
            </div>
        </div>
    )
}
export default Nav