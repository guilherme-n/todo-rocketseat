import styles from './NoTaskCreated.module.css';
import clipboard from '../../../assets/clipboard.svg';

export interface INoTaskCreatedProps {}

export function NoTaskCreated(props: INoTaskCreatedProps) {
	return (
		<div className={styles.wrapper}>
			<img src={clipboard}></img>
			<span>You haven't created any tasks yet</span>
			<span>Create tasks and organize your todo items</span>
		</div>
	);
}
