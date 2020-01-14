import React from 'react';
import '../../styles/Task';

class Task extends React.Component {

	render() {
		

		return (
			<div className='task'>
        <h1 className='task__title'>Task</h1>
        <p className='task__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vitae incidunt ex nemo hic laborum veniam rem eius, vel aperiam tempora est corporis repudiandae, distinctio atque saepe fugiat officia.</p>
        <div className='task__buttons'>
          <button className='task__button'>Accept</button>
          <button className='task__button'>Decline</button>
          <button className='task__button'>Details</button>
        </div>
      </div>
		);
	}
}

export default Task;
