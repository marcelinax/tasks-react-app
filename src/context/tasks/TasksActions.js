export const setTasks = (payload) => {
    return {
        type: 'SET_TASKS',
        payload
    };
};

// id
export const deleteTask = (payload) => {
    return {
        type: 'DELETE_TASK',
        payload
    };
};