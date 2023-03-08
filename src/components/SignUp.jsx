import { React, useContext, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { modalState, toggleModal, signUp } = useContext(UserContext);
    const [validation, setValidation] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value, repeatPasswordRef.current.value);

        if (emailRef.current.value.trim().length === 0) {
            setValidation("Email is required");
            return
        }

        if (passwordRef.current.value.trim().length < 6) {
            setValidation("passwordRef is weak");
            return
        }

        if (passwordRef.current.value !== repeatPasswordRef.current.value) {
            setValidation("the password not correspond");
            return
        }

        try {
            const result = await signUp(emailRef.current.value, passwordRef.current.value);
            setValidation('');
            toggleModal("close");
            navigate("/contact");
        } catch (error) {
            if (error.code == "auth/email-already-in-use") {
                setValidation("You are already subscribe");
            }
        }
    }
    return (
        <>
            {modalState.signUp && (
                <div className="position-fixed top-0 vh-100 vw-100">
                    <div className="w-100 h-100 bg-dark bg-opacity-75" onClick={() => { toggleModal("close") }}>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="modal-dialog">
                            <div className="modal-content bg-light text-dark p-3 rounded-3">
                                <div className="modal-header mb-3">
                                    <h5 className="modal-title">S'incrire</h5>
                                    <button className="btn-close" onClick={() => { toggleModal("close") }}></button>
                                </div>
                                <div className="modal-body">
                                    <form ref={formRef} className="signUpFrom" onSubmit={handleSignUp}>
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className="form-label">Email:</label>
                                            <input type="email" id='signUpEmail' name='signUpEmail' className="form-control" ref={emailRef} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpPassword" className="form-label">Password:</label>
                                            <input type="password" id='signUpPassword' name='signUpPassword' className="form-control" ref={passwordRef} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="repeatPassword" className="form-label">Repeat password:</label>
                                            <input type="password" id='repeatPassword' name='repeatPassword' className="form-control" ref={repeatPasswordRef} required />
                                        </div>
                                        <p className="text-danger mt-2">{validation}</p>
                                        <button type='submit' className="btn btn-primary w-100">S'incrire</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default SignUp;