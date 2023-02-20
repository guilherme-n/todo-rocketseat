import { TaskType } from '../../types/TaskType';
import { Task } from '../Task/Task';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { NoTaskCreated } from './NoTaskCreated/NoTaskCreated';

import style from './TaskView.module.css';

interface TaskViewProps {
	tasks: TaskType[];
	onCompleteIncompleteTask: (id: string) => void;
	onDelete: (id: string) => void;
}

export function TaskView({
	tasks,
	onCompleteIncompleteTask,
	onDelete,
}: TaskViewProps) {
	const countTasks = tasks.length.toString();
	const countCompleteTasks = tasks
		.filter((task) => task.isComplete)
		.length.toString();
	return (
		<main className={style.main}>
			<div>
				<TaskCounter text='Tasks  created' count={countTasks} />
				<TaskCounter
					text='Done'
					count={`${countCompleteTasks} of ${countTasks}`}
				/>
			</div>
			{tasks.length > 0 ? (
				tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onCompleteIncompleteTask={onCompleteIncompleteTask}
						onDelete={onDelete}
					/>
				))
			) : (
				<NoTaskCreated />
			)}
		</main>
	);
}
