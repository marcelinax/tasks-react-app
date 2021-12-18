const tasksReducer = (state, action) => {
    switch (action.type) {
    case 'SET_TASKS':
        return {
            ...state,
            tasks: [...action.payload],
            loading: false
        };
    default: 
        return state;
    }
    
};

export default tasksReducer;