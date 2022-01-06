import { renderTasks } from "./renderTasks.js";
import { setItem, getItem } from "./storage.js" ;

export const onClickCkeckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList') || [];

  const taskIndex = tasksList.findIndex(
    (task) => task.id === Number(event.target.dataset.id)
  );

  if (tasksList[taskIndex].done === false) {
    tasksList[taskIndex].done = true;
  } else {
    tasksList[taskIndex].done = false;
  }

  setItem('tasksList', tasksList);

  renderTasks();
};