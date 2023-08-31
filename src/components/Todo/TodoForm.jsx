import { useState } from 'react';
import { Button } from '../Common/Button/Button';
import styles from './TodoForm.module.scss';

function TodoForm(props) {

  const [isError, setIsError] = useState(true);

  const handleSubmit = function (event) {
    event.preventDefault();
    // setIsError(!isError);
  };

  const handleCancel = function () {
    props.setIsOpenForm(false);
  }

  return (
    <form className={styles.todo__form__container}
    onSubmit={handleSubmit}
    >
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

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
