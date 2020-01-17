import React from 'react';
import '../../styles/Task.scss';

class Task extends React.Component {

	render() {

    const {
      project,
      action,
      budget
    } = this.props.task;

		return (
				<div className='approve'>
          <h3>Project</h3>
          <h3>Action:</h3>
          <p className='approve__details'>Budget:</p>
          <button>Accept</button>
          <button>Decline</button>
        </div>
		);
	}
}

export default Task;
