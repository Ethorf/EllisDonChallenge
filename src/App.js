import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Workflow from './pages/workflow'
import Main from './pages/main'
import TaskList from './components/TaskList/TaskList'
import UserTask from './components/UserTask/UserTask'

// import application components
import Expression from './Expression/Expression';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/workflow" exact component={Workflow}/>
          <Route path="/tasklist" exact component={TaskList}/>
          <Route path="/expression" exact component={Expression}/>
          <Route path="/usertask" exact component={UserTask}/>
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
