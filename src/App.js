import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Workflow from './pages/workflow'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/workflow" exact component={Workflow}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
