import React, { createContext, useState } from 'react';

const EditFormContext = createContext();

export const EditFormProvider = ({ children }) => {
    
    const [editedId, setEditedId] = useState('');

    return (
        <EditFormContext.Provider value={{editedId, setEditedId}}>
            {children}
        </EditFormContext.Provider>
    );
};

export default EditFormContext;