import React, { createContext, useEffect, useState } from 'react'

export const DoctorsContext = createContext();

export const DoctorsContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const callDoctors = () => {
        setIsLoading(true);
        setTimeout(() => {
            fetch("http://192.168.1.70:3001/doctors")
                .then((response) => response.json())
                .then((results) => {
                    setIsLoading(false);
                    setDoctors(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err)
                })
        }, 2000)
    }

    useEffect(() => {
        callDoctors();
    }, [])

    return (
        <DoctorsContext.Provider
            value={{
                doctors,
                isLoading,
                error
            }}
        >
            {children}
        </DoctorsContext.Provider>
    )
}