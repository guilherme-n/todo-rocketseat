import { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function Button({ text, ...props }: ButtonProps) {
	return (
		<button className={styles.button} type='button' {...props}>
			<>
				<span>{text}</span>
				<PlusCircle size={16} weight='bold' />
			</>
		</button>
	);
}
