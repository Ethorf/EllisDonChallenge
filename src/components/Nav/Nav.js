import React from 'react';
import './Nav.scss'
import { Link } from 'react-router-dom';

// import images
import logo from './ellisdon t logo.png';


export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="nav">
        <img src={logo} width="150" alt="Ellis Don Logo" />
        <Link to={'/'}><p>Expression / User Task</p></Link>
        <Link to={'/workflow'}><p>WorkFlow</p></Link>
      </div>
    );
  }
}