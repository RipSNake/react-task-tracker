import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

	return (
			<>
				{tasks.map((task) => (
					<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> 
					))}
			</>
		)
}

export default Tasks;

/*
	Task = {
		id: 1,
		text: 'Todo task',
		day: 'Feb 5th at 4:30pm',
		reminder: true
	}
*/