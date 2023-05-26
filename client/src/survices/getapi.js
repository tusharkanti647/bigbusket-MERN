/*
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(async (url) => {
        const respons = await fetch(url, {
            method: "GET",
            headers: {
                "Content_Type": "application/json"
            }
        });
        const data = await respons.json();
        setData(data);
    }, [url]);

    return [data];
};

export default useFetch;

*/

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            //console.log("hello");
            try {
                const resp = await fetch(url);
                const data = await resp.json();

                setApiData([...data]);

                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { isLoading, apiData, serverError };
};

export { useFetch };