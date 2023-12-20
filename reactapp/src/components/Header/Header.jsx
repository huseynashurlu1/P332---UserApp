import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { UserContext } from '../../context/UserContext'

const Header = () => {
    const context = useContext(UserContext)

    const inputHandler = (e) => {
        context.searchUser(e.target.value)
    }

  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo">
                        <Link to='/'>Shop.az</Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="search-area">
                        <input onChange={inputHandler} type="text" placeholder='Search...' className='form-control'/>
                    </div>
                </div>
                <div className="col-lg-5">
                    <nav>
                        <NavLink to='/'>Home Page</NavLink>
                        <NavLink to='/follows'>My Following {context.user.length > 0 ? <sup>{context.user.length}</sup> : null}</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header