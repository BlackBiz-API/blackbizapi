import { useState } from "react";
import axios from "axios";
import validate from "@/helpers/validate";
import Copy from "@/components/Icons/Copy";
import { writeText } from 'clipboard-polyfill';


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Account(props) {
    const accountState = {
        apiKey: "",
        showLogin: false,
        userReg: "",
        passwordReg: "",
        emailReg: "",
        firstNameReg: "",
        lastNameReg: "",
        regStatus: false,
        regInputError: false,
        regFailed: false,
        regValidation: "",
        regButton: "Submit",
        username: "",
        password: "",
        loginStatus: false,
        loginClicked: false,
        loginFailed: false,
        loginResponse: "",
        loginButton: "Submit"
      };

    const [state, setState] = useState(accountState);

    const handleLoginLink = () => {
        setState({ ...state, showLogin: !state.showLogin });
    }

    const userLogin = () => {
        setState({ loginClicked: true, ...state });
        axios.post(`${BASE_URL}/login`, {
                username: state.username,
                password: state.password,
            })
            .then((response) => {
                setState({
                    ...state,
                    loginButton: "Success! See API Key Below",
                    loginFailed: false,
                    loginStatus: true,
                    apiKey: response.data.apiKey.api_key
                    });
                localStorage.setItem("token", response.data.token)
            }).catch((error) => {
                setState({
                    ...state,
                    loginFailed: true,
                    loginStatus: false,
                    loginResponse: error.response.data.error,
                    loginButton: "Submit"
                    });
            })
    };

    const registerUser = () => {
        const errors = validate(
            state.firstNameReg,
            state.lastNameReg,
            state.userReg,
            state.emailReg,
            state.passwordReg
          );
        if(errors.length > 0) {
            setState({ ...state, regFailed: true, regValidation: errors });
            return
        } else {
        axios.post(`${BASE_URL}/signup`, {
            first_name: state.firstNameReg,
            last_name: state.lastNameReg,
            username: state.userReg,
            password: state.passwordReg,
            email: state.emailReg
            })
            .then((response) => {
                setState({
                    ...state,
                    regButton: "Account Successfully Created!",
                    regStatus: true,
                    apiKey: response.data.apiKey
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    regFailed: true,
                    regInputError: true,
                    regValidation: error.response.data.error
                  });
            })
        }};

    return (
        <main>
            <div className='container'>
                <div className='row'>
                <div className="popup popup-form login-form">
                <ul className="choose-form mb-3">
                    <li className={`nav-signup ${!state.showLogin && 'active'}`}>
                        <button 
                        onClick={() => state.showLogin && handleLoginLink()}
                        title="Sign Up" href="#signup">Get new Key</button>
                    </li>
                    <li className={`nav-login ${state.showLogin &&  'active'}`}>
                        <button 
                        onClick={() => !state.showLogin && handleLoginLink()}
                        title="Log In" href="#login">Already Have an Account</button>
                    </li>
                </ul>

                <div className="popup-content">
                    {!state.showLogin && 
                    <form onSubmit={(e) => e.preventDefault()} className="form-sign form-content" id="signup">
                        <div className="field-inline">
                            <div className="field-input">
                                <input type="text" placeholder="First Name" name="first_name" required onChange={(e) =>  setState({ ...state, firstNameReg: e.target.value})}/>
                            </div>
                            <div className="field-input">
                                <input type="text" placeholder="Last Name"  name="last_name" required onChange={(e) => setState({ ...state, lastNameReg: e.target.value})}/>
                            </div>
                        </div>
                        <div className="field-input">
                            <input type="email" placeholder="Email"  name="email" required onChange={(e) => setState({ ...state, emailReg: e.target.value})}/>
                        </div>
                        <div className="field-input">
                            <input type="text" placeholder="Username" name="user" required onChange={(e) => setState({ ...state, userReg: e.target.value})}/>
                        </div>
                        <div className="field-input">
                            <input type="password" placeholder="Password" name="password" required onChange={(e) => setState({ ...state, passwordReg: e.target.value})}/>
                        </div>
                        <button name="submit" className='bg_btn_color' onClick={registerUser}>{state.regButton}</button>
                    
                        {state.regStatus && <div className="api-info my-3 text-center">
                            <h3 className="mb-3">Your API Key:</h3>
                            <code className="api_key p-4">{state.apiKey}</code>
                            <div className="alert alert-warning" role="alert">
                                <p>Please store your api key in a secure location. The key will disappear once you leave this page</p>
                            </div>
                        </div>}

                        {
                            state.regFailed && 
                            <div className="alert-msg alert alert-danger" roler="alert">
                                { !state.regInputError ?
                                    state.regValidation.map((error, key) => {
                                        return <span key={key}>{error}</span>
                                    }) : <span>{state.regValidation}</span>
                                }
                            </div>
                        }
                    
                    
                    </form> }

                    { state.showLogin && <form className="form-log form-content" id="login" onSubmit={(e) => e.preventDefault()}>
                        <div className="field-input">
                            <input type="text" placeholder="Username or Email" name="user" required onChange={(e) => setState({ ...state, username: e.target.value, loginButton: "Submit"})}/>
                        </div>
                        <div className="field-input">
                            <input type="password" placeholder="Password" name="password" required onChange={(e) => setState({ ...state, password: e.target.value, loginButton: "Submit"})}/>
                        </div>
                        <button 
                            onClick={userLogin}
                            className='bg_btn_color'>{state.loginButton}</button>

                       { state.loginStatus && <div className="api-info my-5 text-center">
                       <h3 className="mb-3">Your API Key:</h3>
                            <code className="api_key p-4">{state.apiKey}
                                <span className="copy mx-3 my-2" aria-label="Copy API Key"><Copy onClick={() => writeText(state.apiKey)}/></span>
                            </code>
                            <div className="alert alert-warning" role="alert">
                                <p>Please store your api key in a secure location. The key will disappear once you leave this page</p>
                            </div>
                        </div>}

                        {
                           state.loginFailed &&
                            <div className="alert-msg alert alert-danger" roler="alert"><p>{state.loginResponse}</p></div>
                        }
                    </form>}
                </div>

            </div>
        </div>
        </div>
        </main>
    );
}

export default Account;