import { Trash } from 'phosphor-react';
import { TaskType } from '../../types/TaskType';
import styles from './Task.module.css';

interface TaskProps {
	task: TaskType;
	onCompleteIncompleteTask: (id: string) => void;
	onDelete: (id: string) => void;
}

export function Task({ task, onCompleteIncompleteTask, onDelete }: TaskProps) {
	return (
		<div className={`${styles.wrapper} ${task.isComplete && styles.complete}`}>
			<input
				type='checkbox'
				onClick={() => onCompleteIncompleteTask(task.id)}
			/>
			<span>{task.text}</span>
			<div style={{ minWidth: '20px' }}>
				<Trash
					size={20}
					onClick={() => onDelete(task.id)}
					color='var(--gray-300)'
				/>
			</div>
		</div>
	);
}
