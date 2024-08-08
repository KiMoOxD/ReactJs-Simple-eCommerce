import { createContext, useContext, useState } from "react";

let MenuContext = createContext()

export default function MenuContextProvider({ children }) {
    let [isMenuOpen, setIsMenuOpen] = useState(false)
    let [searchResult, setSearchResult] = useState({isActive: false, items: []})
    let [isSearchOpen, setIsSearchOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return <MenuContext.Provider value={{
        isMenuOpen,
        toggleMenu,
        searchResult,
        setSearchResult,
        isSearchOpen,
        setIsSearchOpen
        }}>
        {children}
    </MenuContext.Provider>
}

export function useMenu() {
    return useContext(MenuContext)
}