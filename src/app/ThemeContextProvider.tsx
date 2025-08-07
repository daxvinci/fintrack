"use client"

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeContextProps = {
    children:React.ReactNode;
}



export const ThemeContextProvider = ({children}:ThemeContextProps) => {
    const [navActive, setNavActive] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('')
    const [active, setActive] = useState("dashboard");


    return <ThemeContext.Provider value={{active,setActive,navActive,setNavActive,searchValue, setSearchValue}}>{children}</ThemeContext.Provider>
}


 
export default ThemeContextProvider;