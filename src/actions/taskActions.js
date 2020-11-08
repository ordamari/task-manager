import taskService from '../services/taskService';

export function loadtasks() {
  return async dispatch => {
    try {
      const tasks = await taskService.query();
      dispatch({ type: 'SET_TASKS', tasks });

    } catch (err) {
      console.log('ReviewActions: err in load task', err);
    }
  };
}

export function addTask(task) {
  return async dispatch => {
    try {
      const addedTask = await taskService.add(task);
      dispatch({ type: 'TASK_ADD', task: addedTask });
    } catch (err) {
      console.log('ReviewActions: err in add task', err);
    }
  };
}

export function updateTask(task) {
  console.log(task);
  return async dispatch => {
    try {
      await taskService.update(task);
      dispatch({ type: 'TASK_UPDATE', task});
    } catch (err) {
      console.log('ReviewActions: err in add task', err);
    }
  };
}

export function startTask(startedTask) {
  return async dispatch => {
    try {
      var task = await taskService.start(startedTask);
      dispatch({ type: 'TASK_UPDATE', task});
    } catch (err) {
      console.log('ReviewActions: err in add task', err);
      dispatch({ type: 'TASK_UPDATE', task});
    }
  };
}

export function removeTask(taskId) {
  return async dispatch => {
    try {
      await taskService.remove(taskId);
      dispatch({ type: 'TASK_REMOVE', taskId});
    } catch (err) {
      console.log('ReviewActions: err in remove task', err);
    }
  };
}


