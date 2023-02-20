import { InputHTMLAttributes, MutableRefObject } from 'react';
import style from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	inputRef?: MutableRefObject<HTMLInputElement | null>;
}

export function Input({ inputRef, ...props }: InputProps) {
	return (
		<input
			ref={inputRef}
			type='text'
			placeholder='Add new task'
			className={style.input}
			{...props}
		/>
	);
}
