import style from './Input.module.css';

export function Input() {
	return (
		<input type='text' placeholder='Add new task' className={style.input} />
	);
}
