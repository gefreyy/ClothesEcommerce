import { createContext, useContext } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    return (
        <ApiContext.Provider value={{API: API_URL}}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)