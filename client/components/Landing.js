import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Algo Game</h1>
          <p className="lead">
            How fast can you solve algorithm questions?
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary">Sign Up</Link>
            <Link to='/login' className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Landing