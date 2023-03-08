import { createContext, useState } from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase-config';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [modalState, setModalState] = useState({
        signUp: false,
        signIn: false
    });
    
    const toggleModal = action => {
        if (action === "signUp") {
            setModalState({
                signUp: true,
                signIn: false
            });
        }
        else if (action === "signIn") {
            setModalState({
                signUp: false,
                signIn: true
            });
        }
        else if (action === "close") {
            setModalState({
                signUp: false,
                signIn: false
            });
        }
    };
    
    const [currentUser, setCurrentUser] = useState(null);
    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);



    return (
        <UserContext.Provider value={{ modalState, toggleModal, signUp }}>
            {props.children}
        </UserContext.Provider>
    );
};