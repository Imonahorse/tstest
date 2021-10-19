import Task from './task';
import toDo from './../store/todo';
import { observer } from "mobx-react-lite";

const TaskList = observer((): JSX.Element => {

  return (
    <div>
      <p style={{color:'red'}} onClick={()=>toDo.getToDos()}>Загрузить с сервера</p>

      {
        toDo.tasks.map(({ title, id, completed }) => (
          <Task key={id} id={id} completed={completed} title={title} />
        ))
      }
    </div>
  );
})

export default TaskList;
