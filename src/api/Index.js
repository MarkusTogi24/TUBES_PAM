import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function API_Index(){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://server-tubes-pam-app.herokuapp.com/api/products')
                .then ((response) => { 
                    if(!response.status===200){  
                        throw Error('terjadi masalah');
                    }
                    return response.data.data;
                })
                .then ((data) => { 
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    setIsPending(false);
                    setError(error.message);
                })
        }, 1000);
    }, []);

    return { data, isPending, error };
}

