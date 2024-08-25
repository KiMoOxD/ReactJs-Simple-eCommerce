import { createContext, useContext, useState } from "react";

let GeneralContext = createContext()

export default function GeneralContextProvider({ children }) {

    let [isMenuOpen, setIsMenuOpen] = useState(false)
    let [searchResult, setSearchResult] = useState({isActive: false, items: []})
    let [isSearchOpen, setIsSearchOpen] = useState(false);
    let [isAccountOpen, setIsAccountOpen] = useState(false)
    let [currentUser, setCurrentUser] = useState(null)




    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    function toggleAccount() {
        setIsAccountOpen(prev => !prev)
    }


    return <GeneralContext.Provider value={{
        isMenuOpen,
        toggleMenu,
        searchResult,
        setSearchResult,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        toggleAccount,
        currentUser,
        setCurrentUser
        }}>
        {children}
    </GeneralContext.Provider>
}

export function useGeneralContext() {
    return useContext(GeneralContext)
}