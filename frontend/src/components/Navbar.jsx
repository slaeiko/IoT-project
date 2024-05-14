import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const { auth, logout } = useContext( AuthContext );

  return (
    <nav className="navbar navbar-light bg-light static-top">
        <span className='text-primary px-5'>{auth.name}</span>
        <div className="container">
            <a className="navbar-brand" href="#!">GreenSense</a>

            <button onClick={logout} className="btn btn-outline-danger">
              <i className="bi bi-box-arrow-in-left"></i>
               &nbsp;
              <span>Salir</span>
            </button>
        </div>
    </nav>
  )
}
