import { createContext, useContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const API_URL = `http://127.0.0.1:8000/api`
    return (
        <ApiContext.Provider value={{API: API_URL}}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)