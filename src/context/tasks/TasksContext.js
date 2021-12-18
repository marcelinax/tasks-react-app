import React, { createContext, useReducer } from 'react';

import tasksReducer from './TasksReducer';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const initialState = {
        tasks: [],
        loading: false
    };

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    return (
        <TasksContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;