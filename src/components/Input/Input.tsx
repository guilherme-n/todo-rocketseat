import { LegacyRef, MutableRefObject } from 'react';
import style from './Input.module.css';

interface InputProps {
	inputRef?: MutableRefObject<HTMLInputElement | null>;
}

export function Input({ inputRef }: InputProps) {
	return (
		<input
			ref={inputRef}
			type='text'
			placeholder='Add new task'
			className={style.input}
		/>
	);
}
