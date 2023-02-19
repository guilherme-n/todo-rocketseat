import styles from './Taskcounter.module.css';

interface TaskCounterProps {
	text: string;
	count: number;
}

export function TaskCounter({ text, count }: TaskCounterProps) {
	return (
		<div className={styles.wrapper}>
			<span>{text}</span>
			<span>{count}</span>
		</div>
	);
}
