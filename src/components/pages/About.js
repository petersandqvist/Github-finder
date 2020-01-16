import React, { Fragment } from 'react';
import StartPage from '../pages/StartPage';

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to search Github users</p>
      <p>Version: 1.0.1</p>
      <StartPage />
    </Fragment>
  );
};

export default About;
