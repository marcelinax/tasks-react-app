export const setTasks = (payload) => {
    return {
        type: 'SET_TASKS',
        payload
    };
};

export const deleteTask = (payload) => {
    return {
        type: 'DELETE_TASK',
        payload
    };
};

