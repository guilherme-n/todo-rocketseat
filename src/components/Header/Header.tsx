import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { MutableRefObject, KeyboardEvent } from 'react';

interface HeaderProps {
	onCreateTask: () => void;
	inputRef: MutableRefObject<HTMLInputElement | null>;
}

export function Header({ onCreateTask, inputRef }: HeaderProps) {
	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') onCreateTask();
	};

	return (
		<>
			<header className={styles.header}>
				<img src={logo}></img>
			</header>
			<div className={styles['add-new-task']}>
				<div>
					<Input inputRef={inputRef} onKeyUp={handleKeyUp} />
					<Button text='Create' onClick={onCreateTask} />
				</div>
			</div>
		</>
	);
}
