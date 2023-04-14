import { useState } from "react";
import React from "react";


const PageCrud = () =>{
    let {values, setValues} = useState(forms)
    
    const forms = {
        title: '',
        content:''
    
    }
    const formManipulator = (e) =>{
        e.preventDefault()
        addEdit(values)
        let {title,value} = e.target
        setValues({...values,[title]:value})
      }



    const onInput = (e) => setValues(e.target.value);
    const handlerClick = () =>{
        localStorage.clear()
        window.location.reload()
        addEdit()

    }

    const addEdit = obj =>{

    }

 
    

   
    
    
   
   return(
    <div className="container-crud">
           <div className="header">
               <p>CodeLeap Network</p>
               <button onClick={handlerClick}>Logout</button>
           </div>
           <form className="box" addEdit={addEdit} onSubmit={formManipulator}>
            <h2>What's on your mind?</h2>
             
             <div>
             <p>Title</p>
             <input 
             className="input-title"
             value={values}
             onInput={onInput}
             onChange={formManipulator}
             ></input>
             </div>
             <div>
              <p>Content</p>
              <input 
             
              className="input-content"
              onChange={formManipulator}
             ></input>
             </div>
              <button
              value={addEdit}
              disabled={!values}
              >Create</button>
           </form>

       </div>
   )
}
export default PageCrud