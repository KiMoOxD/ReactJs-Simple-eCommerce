import { createContext, useContext, useState } from "react";

let MenuContext = createContext()

export default function MenuContextProvider({ children }) {
    let [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
        {children}
    </MenuContext.Provider>
}

export function useMenu() {
    return useContext(MenuContext)
}