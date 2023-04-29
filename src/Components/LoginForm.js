import { useState } from "react";
import React from "react";
import Create from "./Create";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {

    const [login, setLogin] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const onInput = (e) => setLogin(e.target.value);
    const navigate = useNavigate()

    const hadleSubmit = () => {
        localStorage.setItem('user', JSON.stringify(login).replace(/"/g, ''))
        setIsLogged(true)
        navigate('/create')
    }

    return (
        (isLogged ? <Create /> :
            <div className="container">
                <form onSubmit={hadleSubmit}>
                    <h3>Welcome to CodeLeap network!</h3>

                    <p>Please enter your username</p>
                    <input
                        value={login}
                        onInput={onInput}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <button
                        disabled={!login}
                    >Enter</button>
                </form>

            </div>

        )
    )

}

export default LoginForm