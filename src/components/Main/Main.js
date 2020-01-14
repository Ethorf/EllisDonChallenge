import React from 'react';
import './Main.scss';
import Task from '../Task/Task';

class Main extends React.Component {

	render() {
		return (
			<div className='main'>
        <Task />
      </div>
		);
	}
}

export default Main;