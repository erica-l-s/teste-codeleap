import { useState } from "react";
import React from "react";
import Create from "./Create";



const LoginForm = () => {
    
    const [login, setLogin] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    
    const onInput = (e) => setLogin(e.target.value);
   

    const hadleSubmit = () => {
   
          localStorage.setItem('info', JSON.stringify(login))
          setIsLogged(true)
        
          
    }
    
  
    return (
          ( isLogged ? <Create/> : 
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