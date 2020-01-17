import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Expression from '../Expression/Expression'
import '../styles/main.scss'
import Task from  '../components/UserTask/UserTask'

export default class App extends React.Component {
  render () {
    return (
      <div >
        <BrowserRouter>
            <Task/>
            <div></div>
            <Expression/>
        </BrowserRouter>
      </div>
    );
  }
}