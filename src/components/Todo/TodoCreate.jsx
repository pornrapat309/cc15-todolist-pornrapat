import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import { Value } from 'sass';
import styles from './TodoCreate.module.scss';
import TodoForm from './TodoForm';

function TodoCreate() {

  const [isOpenFrom, setIsOpenForm] = useState(false);

  const handleClick = function () {
    setIsOpenForm(!isOpenFrom);
  }

  return (
    <>
    { isOpenFrom ? (
      <TodoForm textSubmit='Add Task'/>
    ) : (
      <div className={styles.todo__create}
      onClick={handleClick}
      >
        <div className={styles.todo__create__button}>
          <HiPlus />
        </div>
        <h3 className={styles.todo__create__text}>Add Task</h3>
      </div>
    )
  }
    </>
  );
}

export default TodoCreate;
