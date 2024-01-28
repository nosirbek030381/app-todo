import { ChangeEvent, useState } from 'react';
import { data } from './constants';
import styles from './home.module.css';
import { IData } from './interfaces';

const App = (): JSX.Element => {
	const [title, setTitle] = useState<string>('');
	const [arr, setArr] = useState<IData[]>(data);

	const handleTitle = (e: ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.target.value);
	};

	const handleSubmit = (): void => {
		if (!title?.length) return;
		const newData = {
			title: title,
			id: new Date().getTime(),
			description: 'description',
		};
		setArr([...arr, newData]);
		setTitle('');
	};

	const deleteItem = (id: number): void => {
		const newArr = arr.filter(item => item.id !== id);
		setArr(newArr);
	};

	return (
		<div className={styles.todo}>
			<h1 className={styles.title}>APP TODO</h1>
			<input
				placeholder='Type your task here...'
				value={title}
				onChange={handleTitle}
				className={styles.input}
			/>
			<button onClick={handleSubmit} className={styles.button}>
				Add todo
			</button>

			<div className={styles.card}>
				{arr.map(item => (
					<div className={styles.cardItem} key={item.id}>
						<p>{item.title}</p>
						<div className={styles.delBtn}>
							<button onClick={() => deleteItem(item.id)}>Del</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
