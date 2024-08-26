import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "../helper/firebase";

let GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let [searchResult, setSearchResult] = useState({
    isActive: false,
    items: [],
  });
  let [isSearchOpen, setIsSearchOpen] = useState(false);
  let [isAccountOpen, setIsAccountOpen] = useState(false);
  let [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(user.user, {
          displayName: displayName,
        })
          .then(() => {
            console.log("User profile updated with display name:", displayName);
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        console.error("Error Sign up:", error);
        return new Error(error);
      });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.error("Error Sign In:", error);
      return new Error(error);
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
      setCurrentUser(null);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function toggleAccount() {
    setIsAccountOpen((prev) => !prev);
  }

  return (
    <GeneralContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        searchResult,
        setSearchResult,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        toggleAccount,
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export function useGeneralContext() {
  return useContext(GeneralContext);
}
