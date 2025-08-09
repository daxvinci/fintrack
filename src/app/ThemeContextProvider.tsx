"use client"

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeContextProps = {
    children:React.ReactNode;
}



export const ThemeContextProvider = ({children}:ThemeContextProps) => {
    const [navActive, setNavActive] = useState<boolean>(false);
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('')
    const [active, setActive] = useState("dashboard");


    return <ThemeContext.Provider value={{active,setActive,searchActive,setSearchActive,navActive,setNavActive,searchValue, setSearchValue}}>{children}</ThemeContext.Provider>
}


 
export default ThemeContextProvider;