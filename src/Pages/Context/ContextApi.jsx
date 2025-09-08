import React,{ createContext,useState } from "react";

// Create a context
export const MyContext = createContext();

export default function ContextApi({ children }) {

    const [user,setUser] = useState({ name: "Nimesh",age: 25 });

    return (
        <MyContext.Provider value={{ user,setUser }}>
            {children}
        </MyContext.Provider>
    );
}
