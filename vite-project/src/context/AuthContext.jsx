import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export function AuthProvider({children}) {
    const [Auth, setAuth] = useState(null)

    useEffect(()=>{
        const token = localStorage.getItem("access")
        if (token) {
            setAuth({token})
        }
    },[])
    function logOut() {
        localStorage.removeItem("access");
        setAuth(null);
    }

    return(
        <AuthContext.Provider value={{Auth, setAuth ,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  return useContext (AuthContext);
}