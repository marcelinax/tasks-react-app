import React from 'react';

export const ToggleButton = ({value, setValue}) => {
  

   
    return (
        <div onClick={setValue} className={`min-w-[40px] h-5 relative cursor-pointer bg-bg-page rounded-lg shadow-lg switch ${value ? 'active':''}`} />
    ); 
};
