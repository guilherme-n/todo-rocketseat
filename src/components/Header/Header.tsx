import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function Header() {
	return (
		<>
			<header className={styles.header}>
				<img src={logo}></img>
			</header>
			<div className={styles['add-new-task']}>
				<div>
					<Input />
					<Button text='Create' />
				</div>
			</div>
		</>
	);
}
