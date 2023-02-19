import { TaskCounter } from '../TaskCounter/TaskCounter';
import { NoTaskCreated } from './NoTaskCreated/NoTaskCreated';

import style from './TaskView.module.css';

export function TaskView() {
	return (
		<main className={style.main}>
			<div>
				<TaskCounter text='Tasks  created' count={0} />
				<TaskCounter text='Done' count={0} />
			</div>
			<NoTaskCreated />
		</main>
	);
}
