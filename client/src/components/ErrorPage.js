import React from 'react';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className='notfound'>
        <h1>404 Error</h1>
        <h2>We are sorry, Page not found</h2>
        <p className='mb-5'>
            The page you are looking for might be not available.
        </p>
        <button className='btn btn-secondary'><NavLink to="/" className='navlink'>Back to Home</NavLink></button>
      </div>
    </>
  )
}

export default ErrorPage