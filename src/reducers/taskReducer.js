const initialState = {
  tasks: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.tasks };
    case 'TASK_ADD':
      return { ...state, tasks: [...state.tasks, action.task] };
    case 'TASK_UPDATE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.task._id ? action.task : task
        )
      };
    case 'TASK_REMOVE':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.taskId)
      };
    default:
      return state;
  }
}
