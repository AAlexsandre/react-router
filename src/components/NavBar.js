import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-3">
        <Link to="/" className='navbar-brand'>Coucou</Link>

        <div>
          <button className='btn btn-primary'>S'incrire</button>
          <button className='btn btn-success ms-2'>Se connecter</button>
          <button className='btn btn-danger ms-2'>Se déconnecter</button>
        </div>
    </nav>
  )
}

export default NavBar;