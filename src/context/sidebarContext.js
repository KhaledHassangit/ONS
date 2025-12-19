"use client";
import { createContext, useState } from "react";  

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
    const [isOpen , setIsOpen] = useState(false);
    const [clientType , setClientType] = useState(null);
    const data = {
        isOpen , 
        setIsOpen,
        clientType , 
        setClientType
    }
    return (
        <SidebarContext.Provider value={data}>
            {children}
        </SidebarContext.Provider>
    )
};

export default SidebarProvider