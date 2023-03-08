import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" className='navbar-brand'>Coucou</Link>

      <div className='d-flex gap-2'>
        <Link to="/contact" className='btn btn-dark'>Contact</Link>
        <button className='btn btn-primary'>S'incrire</button>
        <button className='btn btn-success'>Se connecter</button>
        <button className='btn btn-danger'>Se déconnecter</button>
      </div>
    </nav>
  )
}

export default NavBar;