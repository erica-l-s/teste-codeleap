import { useState } from "react";
import React from "react";


const PageCrud = () =>{
    const [title, setTitle] = useState("")
   
    const onInput = (e) => setTitle(e.target.value);
    const handlerClick = () =>{
        localStorage.clear()
        window.location.reload()

    }
    
   
   return(
    <div className="container-crud">
           <div className="header">
               <p>CodeLeap Network</p>
               <button onClick={handlerClick}>Logout</button>
           </div>
           <div className="box">
            <h2>What's on your mind?</h2>
             
             <div>
             <p>Title</p>
             <input 
             className="input-title"
             value={title}
             onInput={onInput}
             ></input>
             </div>
             <div>
              <p>Content</p>
              <input 
              className="input-content"
             ></input>
             </div>
              <button
              disabled={!title}
              >Create</button>
           </div>

       </div>
   )
}
export default PageCrud