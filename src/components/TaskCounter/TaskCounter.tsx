import styles from './TaskCounter.module.css';

interface TaskCounterProps {
	text: string;
	count: string;
}

export function TaskCounter({ text, count }: TaskCounterProps) {
	return (
		<div className={styles.wrapper}>
			<span>{text}</span>
			<span>{count}</span>
		</div>
	);
}
