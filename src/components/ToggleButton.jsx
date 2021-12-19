import React, { useState } from 'react';

export const ToggleButton = () => {
    const [value, setValue] = useState(false);

   
    return (
        <div onClick={()=> {return setValue(!value);}} className={`w-10 h-5 relative cursor-pointer bg-bg-page rounded-lg shadow-lg switch ${value ? 'active':''}`} />
    ); 
};
