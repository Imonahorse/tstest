import { observer } from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import toDo from './../store/todo';
import { ITask } from "../types/types";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const Form = observer(() => {
    const [state, setState] = useState<ITask>({id: 4, completed: false, title: ''});

    useEffect(() => {
      setState((prev) => ({...prev, id: toDo.tasks.length+1}));
    }, [toDo.tasks.length])

    const handleSubmitClick = (e: ButtonEvent):void => {
      e.preventDefault();

      toDo.addTask(state);
      setState({id: 4, completed: false, title: ''})
    }

    const onChange = (e: InputEvent):any => {
      const {value} = e.target;

      setState((prev)=> ({...prev, title: value}));
    };


  return(
    <div>
      <form action="" method='post'>
        <label>
          Введите вашу важную задачу:
          <input
          type="text"
          value={state.title}
          onChange={onChange}
          />
        </label>
        <button type='submit' onClick={handleSubmitClick}>Записать!</button>
      </form>
    </div>
  );
})

export default Form;
