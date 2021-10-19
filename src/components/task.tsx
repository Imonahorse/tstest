import { ITask } from "../types/types";
import toDo from './../store/todo'
import { observer } from "mobx-react-lite";
import { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Task = observer((task: ITask):JSX.Element => {
  const [state, setState] = useState(task);

  const colorStyle =state.completed ? 'red' : 'white';

  const handleCheckboxState = (e: InputEvent) => {
    setState((prev) => ({...prev, completed: !prev.completed}))
  }

  return (
    <div style={{backgroundColor: colorStyle}}>
      <input
      style={{width: '30px', height:  '40px'}}
      type="checkbox"
      checked={state.completed}
      onChange={handleCheckboxState}
      />
      <span>{state.title}</span>
      <button
      style={{width: '30px', height:  '40px'}}
      type='button'
       onClick={()=>toDo.removeTask(state.id)}
       >X
       </button>
    </div>
  )
})

export default Task;
