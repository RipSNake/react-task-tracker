import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [ text, setText ] = useState('');
	const [ day, setDay ] = useState('');
	const [ reminder, setReminder ] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if(!text) {
			alert('Please add a Task Name');
			return
		}

		// Add default Date
		if(!day) {
			let d = new Date();
			d.setHours(d.getHours() + 1);
			setDay(d, onAdd({text, day, reminder}));
		} else {
			onAdd({text, day, reminder});
		}


		setText('');
		setDay('');
		setReminder(false);
	}

	return (
		<form onSubmit={onSubmit} >
		<div className="form-control">
			<label>Describe Task</label>
			<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
</div>
<div className="form-control">
			<label>Day & Time</label>
			<input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
</div>
<div className="form-control">
			<label>Set Reminder</label>
			<input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.target.value)}/>
</div>
			<input className="btn btn-block" type='submit' value="Save Tasks"/>
		</form>
		)
}

export default AddTask;