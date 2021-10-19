import { makeAutoObservable } from "mobx";
import { ITask } from "../types/types";


class ToDo {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'Написать туду',
      completed: false,
    },
  ]


  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks = [...this.tasks, task];
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((result:ITask[]) => this.tasks = [...this.tasks, ...result])
      console.log('zagrusilos')
  }
}

export default new ToDo();
