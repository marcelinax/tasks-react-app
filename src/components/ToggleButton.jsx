import React, { useState } from 'react';

export const ToggleButton = ({value, setValue}) => {
  

   
    return (
        <div onClick={setValue} className={`w-10 h-5 relative cursor-pointer bg-bg-page rounded-lg shadow-lg switch ${value ? 'active':''}`} />
    ); 
};
