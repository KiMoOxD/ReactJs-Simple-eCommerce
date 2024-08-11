import { createContext, useContext, useState } from "react";

let GeneralContext = createContext()

export default function GeneralContextProvider({ children }) {

    let [isMenuOpen, setIsMenuOpen] = useState(false)
    let [searchResult, setSearchResult] = useState({isActive: false, items: []})
    let [isSearchOpen, setIsSearchOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return <GeneralContext.Provider value={{
        isMenuOpen,
        toggleMenu,
        searchResult,
        setSearchResult,
        isSearchOpen,
        setIsSearchOpen,
        }}>
        {children}
    </GeneralContext.Provider>
}

export function useGeneralContext() {
    return useContext(GeneralContext)
}