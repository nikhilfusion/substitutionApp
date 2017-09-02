import React, { PropTypes } from 'react';
import Header from './Common/Header';

const Main = ({ children }) => (
  <div className="layoutContainer">
    <Header />
    {/* this will render the child routes */}
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Main;
