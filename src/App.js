import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Workflow from './pages/workflow'
import Main from './pages/main'

// import application components
import Expression from './Expression/Expression';

function App() {
  return (
    <>
    <div className="App">
      <Main />
      <BrowserRouter>
        <Nav/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/workflow" exact component={Workflow}/>
          </Switch>
      </BrowserRouter>
    </div>
    <Expression />
    </>
  );
}

export default App;
