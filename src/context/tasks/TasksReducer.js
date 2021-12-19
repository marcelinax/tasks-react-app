const tasksReducer = (state, action) => {
    switch (action.type) {
    case 'SET_TASKS':
        return {
            ...state,
            tasks: [...action.payload],
            loading: false
        };
    case 'DELETE_TASK':
        return {
            ...state,
            tasks: [...state.tasks.filter(t => {return t.id !== action.payload;})]
        };
    default: 
        return state;
    }
    
};

export default tasksReducer;