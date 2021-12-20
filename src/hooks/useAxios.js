import React, { useEffect, useState } from 'react';

import api from '../config/api';

export const useAxios = ({ url, method, data = null, config = null}) => {
    
    const [response, setResponse] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const fetchData = async () => {
        try {
            const res = await api[method](url, method === 'get' ? config : data, method === 'get' ? data : config);
            setResponse(res.data);
            setLoading(false);
            setErrors(null);
        } catch (error) {
            const resError = error.response.data.errors;
            console.log(resError);

            setErrors([resError]);
            setLoading(false);
        }
        
    };

    useEffect(() => {
        if(method === 'get') fetchData();
    }, []);
    
    return {response, errors, loading, fetchData};
};
