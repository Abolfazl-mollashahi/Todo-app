import { createContext, useContext, useState } from "react";

export const  UserContext = createContext()

export const useAuthContext = () =>{
  return useContext(UserContext) 
}

function AuthContextprovider({children}) {
  const [AuthUser, setAuthUser] = useState( JSON.parse(localStorage.getItem("usertoken")) || null );
  return (
    <UserContext.Provider value={{ AuthUser , setAuthUser  }}  >
      {children}
    </UserContext.Provider>
  )
}

export default AuthContextprovider;



