import { renderTasks } from "./renderTasks.js";
import { setItem, getItem } from "./storage.js" ;

function counter() {
  let count = 5;

  return function () {
    count += 1;
    return count;
  };
}

const createId = counter();

export const onCreateTask = (event) => {
  const taskInputElem = document.querySelector('.task-input');

  const isFilled = taskInputElem.value;
  if (!isFilled) {
    return;
  }

  const id = createId();

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
      id, 
      text: taskInputElem.value, 
      done: false
  });

  setItem('tasksList', newTasksList);

  taskInputElem.value = '';

  renderTasks();
};