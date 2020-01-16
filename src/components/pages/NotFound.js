import React, { Fragment } from 'react';
import img from '../../images/img.jpg';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className='container text-center'>
        <h1>Not found</h1>
        <p>The page you are looking for does not exist</p>
        <NavLink to='/' className='btn btn-primary my-1'>
          Back to homepage
        </NavLink>
        <img src={img} alt={''} />
      </div>
    </Fragment>
  );
};

export default NotFound;
