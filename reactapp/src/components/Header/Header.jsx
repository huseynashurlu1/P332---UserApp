import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo">
                        <Link to='/'>Shop.az</Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <nav>
                        <NavLink to='/'>Ana səhifə</NavLink>
                        <NavLink to='/contact'>Əlaqə</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header