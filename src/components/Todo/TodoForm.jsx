import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../Common/Button/Button';
import styles from './TodoForm.module.scss';

function TodoForm(props) {

  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState(props.oldTodo?.task || '');

  const handleChangInput = function (event) {
    if(isError) setIsError(false);
    setTaskInput(event.target.value);
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    if(taskInput.trim() === '') {
      setIsError(true);
      return;
    }
    if(props.addTodo) props.addTodo(taskInput);
    else if (props.editTodo && props.oldTodo) {
      props.editTodo(props.oldTodo.id, {task: taskInput});
    } 
      
    props.setIsOpenForm(false);
  };

  const handleCancel = function () {

    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container}
    onSubmit={handleSubmit}
    >
      {/*	Body */}
      <input className={styles.todo__form__input} 
      placeholder='Task Name' 
      value={taskInput}
      onChange={handleChangInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type='button' onClick={handleCancel}/>
          <Button text={props.textSubmit} active={true} type='submit'/>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
