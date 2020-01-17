import React from 'react';
import '../../styles/TaskList.scss';
import Task from '../Task/Task'

class TaskList extends React.Component {
  state = {
    data: [
      {
        project: "Construction 1",
        action: "Accept/Decline",
        budget: "$568, 372"
      },
      {
        project: "Construction 2",
        action: "Accept/Decline",
        budget: "$568, 372"
      }
    ]
  }

	render() {
		return (
			<div className='my-tasks'>
        <h1>Task List</h1>
				{this.state.data.map(task => (
          <Task
            key={task.project}
            task={task}
          />
        ))}
			</div>
		);
	}
}

export default TaskList;