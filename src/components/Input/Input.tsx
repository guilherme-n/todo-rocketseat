import style from './Input.module.css';

export function Input() {
	return (
		<input
			type='text'
			placeholder='Adicione uma nova tarefa'
			className={style.input}
		/>
	);
}
