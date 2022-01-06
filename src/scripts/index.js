import { renderTasks } from "./renderTasks.js";
import { onCreateTask } from "./createTask.js";
import { onClickCkeckbox } from "./upDateTask.js";

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  const createTaskElem = document.querySelector('.create-task-btn');
  createTaskElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onClickCkeckbox);
});

const onStorageChange = () => {
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
