import { createContext, useState } from "react";

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
    return (
        <UserContext.Provider value={{ modalState, toggleModal }}>
            {props.children}
        </UserContext.Provider>
    );
};