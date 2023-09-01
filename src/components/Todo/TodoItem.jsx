import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import styles from './TodoItem.module.scss';
import TodoForm from './TodoForm';

function TodoItem(props) {
    const {id, task, done, date} = props;
    const [isOpenForm, setIsOpenForm] = useState(false);
    console.log(id);

    const handleClick = function() {
        setIsOpenForm(!isOpenForm);
      }

      return (
        <>
        {isOpenForm ? (
            <TodoForm 
            textSubmit='Edit Task'
            setIsOpenForm={setIsOpenForm}
            />
          ) : (
            <li className={styles.todo}>
            <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
                <HiOutlineCheck className={styles.todo__checkbox__icon} />
            </div>
            <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>{task}</p>
            <span className={styles.todo__date}>{date}</span>
            <div className={styles.todo__action}>
                <span onClick={handleClick}>
                <FaPen className={styles.todo__edit} />
                </span>
                <span>
                <FaTrashAlt className={styles.todo__delete} />
                </span>
            </div>
            </li>
          )}
            </>
      );
    }

export default TodoItem;