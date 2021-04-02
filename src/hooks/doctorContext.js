import React, { createContext } from 'react'

export const DoctorsContext = createContext();

export const DoctorsContextProvider = ({ children }) => {
    return (
        <DoctorsContext.Provider
            value={{
                doctors: [1, 2, 3, 4, 5, 6, 7, 8]
            }}
        >
            {children}
        </DoctorsContext.Provider>
    )
}