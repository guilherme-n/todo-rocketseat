import './App.css';
import { useRef, useState } from 'react';
import { Header } from './components/Header/Header';
import { TaskView } from './components/TaskView/TaskView';
import { TaskType } from './types/TaskType';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleCreateTask = () => {
		const id = uuidv4();

		if (!inputRef.current?.value) {
			alert('type a text for your task');
			return;
		}

		const task: TaskType = {
			id,
			text: inputRef.current?.value,
			isComplete: false,
		};

		setTasks([task, ...tasks]);
		inputRef.current.value = '';
		inputRef.current.focus();
	};

	const handleCompleteIncompleteTask = (id: string) => {
		let tasksUpdated = tasks
			.map((task) => {
				if (task.id === id) {
					return { ...task, isComplete: !task.isComplete };
				} else {
					return task;
				}
			})
			.sort((a, b) => (!a.isComplete && b.isComplete ? -1 : 0));

		setTasks([...tasksUpdated]);
	};

	const handleDeleteTask = (id: string) => {
		const tasksUpdated = tasks.filter((task) => task.id !== id);
		setTasks([...tasksUpdated]);
	};

	return (
		<>
			<Header onCreateTask={handleCreateTask} inputRef={inputRef} />
			<TaskView
				tasks={tasks}
				onCompleteIncompleteTask={handleCompleteIncompleteTask}
				onDelete={handleDeleteTask}
			/>
		</>
	);
}

export default App;
