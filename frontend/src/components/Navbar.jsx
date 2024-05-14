import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const { auth } = useContext( AuthContext );

  return (
    <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
            <a className="navbar-brand" href="#!">GreenSense</a>
            <span>{auth.name}</span>
        </div>
    </nav>
  )
}
