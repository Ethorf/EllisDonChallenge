import React from 'react';
import './styles/main.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Workflow from '../pages/workflow'

export default class App extends React.Component {
  render () {
    return (
      <div >
        <BrowserRouter>
            <Sidebar/>  
            <Switch>
              <Route path="/" exact component={Workflow}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}