import React, { createContext, useState } from 'react';

const TaskFilterContext = createContext();

export const TaskFilterProvider = ({ children }) => {
    
    const [taskFilter, setTaskFilter] = useState({
        query: '',
        finished: null,
        end: null
    });

    return (
        <TaskFilterContext.Provider value={{taskFilter, setTaskFilter}}>
            {children}
        </TaskFilterContext.Provider>
    );
};

export default TaskFilterContext;