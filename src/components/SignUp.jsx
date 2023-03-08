import React from 'react';

const SignUp = () => {
    return (
        <div className="position-fixed top-0 vh-100 vw-100">
            <div className="w-100 h-100 bg-dark bg-opacity-75">
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="modal-dialog">
                    <div className="modal-content bg-light text-dark p-3 rounded-3">
                        <div className="modal-header mb-3">
                            <h5 className="modal-title">S'incrire</h5>
                            <button className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="signUpFrom">
                                <div className="mb-3">
                                    <label htmlFor="signUpEmail" className="form-label">Email:</label>
                                    <input type="email" id='signUpEmail' name='signUpEmail' className="form-control" required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-body">
                            <form className="signUpPassword">
                                <div className="mb-3">
                                    <label htmlFor="signUpPassword" className="form-label">Password:</label>
                                    <input type="password" id='signUpPassword' name='signUpPassword' className="form-control" required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-body">
                            <form className="repeatPassword">
                                <div className="mb-3">
                                    <label htmlFor="repeatPassword" className="form-label">Repeat password:</label>
                                    <input type="password" id='repeatPassword' name='repeatPassword' className="form-control" required />
                                </div>
                            </form>
                        </div>
                        <p className="text-danger mt-2">Validation</p>
                        <button className="btn btn-primary">S'incrire</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;