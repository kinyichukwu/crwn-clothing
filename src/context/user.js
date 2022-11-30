import { createContext, useState } from "react";

export const UserContext = createContext({

})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    
    return <UserContext.Provider>{children}</UserContext.Provider>
}