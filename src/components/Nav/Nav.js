import React from 'react';
import './Nav.scss'


export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="nav">
        <p>EllisDon</p>
        <p>Expression / User Task</p>
        <p>WorkFlow</p>
      </div>
    );
  }
}