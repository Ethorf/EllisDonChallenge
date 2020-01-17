import React from 'react';
import './Nav.scss'
import { Link } from 'react-router-dom';


export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="nav">
        <p>EllisDon</p>
        <Link to={'/'}><p>Expression / User Task</p></Link>
        <Link to={'/workflow'}><p>WorkFlow</p></Link>
      </div>
    );
  }
}