import React from 'react';
import './UserTask.scss';

class TaskList extends React.Component {
  state = {
    data: [],
    buttonToggle: false
  }

  handleClickButton = (e) => {
    e.preventDefault();
		this.setState(state => ({
			buttonToggle: !state.buttonToggle
		}));
  };

	render() {

    const acceptDecline = (
      <div>Accept/Decline Button Added</div>
    )

		return (
			<div className='create-task'>
        <h1>Create Task</h1>
        <form className='create-task__form'>
          <input type="text" placeholder='Type of task...'/>
          <textarea name="create-task__description" id="" cols="30" rows="10" placeholder='description...'></textarea>
          <button onClick={this.handleClickButton}>Add Accept/Decline Button</button>
          {this.state.buttonToggle ? acceptDecline : !acceptDecline}
        </form>
			</div>
		);
	}
}

export default TaskList;